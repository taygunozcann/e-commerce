import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
 
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});
 
const myLoggerMiddleware = logger.createLogger();

// logger must be the LAST middleware
const store = createStore(rootReducer, applyMiddleware(thunk, myLoggerMiddleware));
 
export default store;