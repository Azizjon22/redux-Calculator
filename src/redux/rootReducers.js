import { calculatorReducer, CALCULATOR_KEY } from "./canculatorRedux/canculatorReduser";
import {combineReducers} from "redux"


let rootReducers = combineReducers({
    [CALCULATOR_KEY]:calculatorReducer
})


export {rootReducers}