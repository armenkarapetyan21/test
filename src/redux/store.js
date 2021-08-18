import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { UserReducer } from "./users/UserSlice";

export let store = createStore(rootReducer,  )