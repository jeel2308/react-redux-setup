import {createStore,applyMiddleware} from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/index";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;
