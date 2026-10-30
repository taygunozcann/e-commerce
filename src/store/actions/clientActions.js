import { api } from "../../api/axiosInstance";

// Action types
export const SET_USER = "client/SET_USER";
export const SET_ADDRESS_LIST = "client/SET_ADDRESS_LIST";
export const SET_CREDIT_CARDS = "client/SET_CREDIT_CARDS";
export const SET_ROLES = "client/SET_ROLES";
export const SET_THEME = "client/SET_THEME";
export const SET_LANGUAGE = "client/SET_LANGUAGE";

// Action creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setAddressList = (addressList) => ({ type: SET_ADDRESS_LIST, payload: addressList });
export const setCreditCards = (creditCards) => ({ type: SET_CREDIT_CARDS, payload: creditCards });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });

// Thunk action creator: fetches roles ONLY if they are not in the store yet
export const fetchRolesIfNeeded = () => async (dispatch, getState) => {
  if (getState().client.roles.length > 0) return; // already loaded -> no request
  try {
    const { data } = await api.get("/roles");
    dispatch(setRoles(data));
  } catch (error) {
    console.error("Failed to fetch roles:", error);
    throw error; // let the caller show an error if it wants to
  }
};

// Thunk: POST /login. Resolves with the user on success, rejects on failure.
// Token is stored in localStorage ONLY when "remember me" is checked.
export const loginUser = (credentials, remember = false) => async (dispatch) => {
  const { data } = await api.post("/login", {
    email: credentials.email,
    password: credentials.password,
  });
  const { token, ...user } = data;

  if (token) {
    api.defaults.headers.common.Authorization = token; // used by later requests
    if (remember) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }
  dispatch(setUser(user));
  return user;
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  delete api.defaults.headers.common.Authorization;
  dispatch(setUser({}));
};

// Thunk: auto-login on app start ("remember me").
// Reads the token from localStorage, validates it with GET /verify and restores the user.
// Resolves with the user, or null if there is no token / it is invalid.
export const autoLogin = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    api.defaults.headers.common.Authorization = token;
    const { data } = await api.get("/verify");
    const { token: newToken, ...user } = data;

    if (newToken) {
      // the backend may renew the token on verify: keep the fresh one
      localStorage.setItem("token", newToken);
      api.defaults.headers.common.Authorization = newToken;
    }
    dispatch(setUser(user));
    return user;
  } catch (error) {
    // expired / invalid token: clean everything, user stays logged out
    localStorage.removeItem("token");
    delete api.defaults.headers.common.Authorization;
    return null;
  }
};