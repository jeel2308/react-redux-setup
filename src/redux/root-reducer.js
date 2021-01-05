import {combineReducers} from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
   cake : cakeReducer,
   iceCream : iceCreamReducer,
   user : userReducer
});

export default rootReducer;