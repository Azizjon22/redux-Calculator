import { rootReducers } from "./rootReducers";
import {createStore} from 'redux'


let store = createStore(rootReducers,)

export {store}