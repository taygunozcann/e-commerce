import { api } from "../../api/axiosInstance";

// Action types
export const SET_CATEGORIES = "product/SET_CATEGORIES";
export const SET_PRODUCT_LIST = "product/SET_PRODUCT_LIST";
export const SET_TOTAL = "product/SET_TOTAL";
export const SET_FETCH_STATE = "product/SET_FETCH_STATE";
export const SET_LIMIT = "product/SET_LIMIT";
export const SET_OFFSET = "product/SET_OFFSET";
export const SET_FILTER = "product/SET_FILTER";
export const SET_SORT = "product/SET_SORT";

// Allowed fetch states
export const FETCH_STATES = {
  NOT_FETCHED: "NOT_FETCHED",
  FETCHING: "FETCHING",
  FETCHED: "FETCHED",
  FAILED: "FAILED",
};

// Action creators
export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (productList) => ({ type: SET_PRODUCT_LIST, payload: productList });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setSort = (sort) => ({ type: SET_SORT, payload: sort });

// Thunk: fetches categories ONLY if the store doesn't have them yet
export const fetchCategoriesIfNeeded = () => async (dispatch, getState) => {
  if (getState().product.categories.length > 0) return;
  try {
    const { data } = await api.get("/categories");
    dispatch(setCategories(data));
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
};

// Thunk: GET /products -> { total, products }
// Query params, sent in this order and ONLY when they have a value:
//   category, filter, sort (+ limit, offset when given, e.g. for pagination)
// Example: products?category=2&filter=siyah&sort=price:desc
let lastRequestId = 0; // ignore stale responses when parameters change quickly

export const fetchProducts = (params = {}) => async (dispatch) => {
  const query = {};
  ["category", "filter", "sort", "limit", "offset"].forEach((key) => {
    const value = params[key];
    if (value !== undefined && value !== null && value !== "") query[key] = value;
  });

  const requestId = ++lastRequestId;
  dispatch(setFetchState(FETCH_STATES.FETCHING));
  try {
    const { data } = await api.get("/products", { params: query });
    if (requestId !== lastRequestId) return; // a newer request is in flight
    dispatch(setTotal(data.total));
    dispatch(setProductList(data.products));
    dispatch(setFetchState(FETCH_STATES.FETCHED));
  } catch (error) {
    if (requestId !== lastRequestId) return;
    console.error("Failed to fetch products:", error);
    dispatch(setFetchState(FETCH_STATES.FAILED));
  }
};