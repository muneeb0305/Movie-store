import { createStore } from "redux";
import Rootreducers from "./Reducers/index";

const store = createStore(Rootreducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__())
export default store