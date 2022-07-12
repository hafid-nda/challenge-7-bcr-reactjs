import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import carsReducer from "./carsReducer";

const store = createStore(carsReducer, compose(applyMiddleware(thunk)));

export default store;
