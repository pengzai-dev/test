import * as ActionTypes from './ActionTypes';
import AppDispatcher from "./AppDispatcher";
export const increment = (couterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCEMENT,
        couterCaption: couterCaption
    })
}
export const decrement = (couterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENTP,
        couterCaption: couterCaption
    })
}
