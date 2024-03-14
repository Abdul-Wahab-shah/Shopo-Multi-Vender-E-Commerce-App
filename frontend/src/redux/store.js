import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/user.js";

const Store=configureStore({
    reducer:{
user:userReducer,
    }
});

export default Store;