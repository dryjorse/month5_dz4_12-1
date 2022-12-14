import { types } from "../types";

const initialState = {
    title: 'Старый текст',
}

export const titleReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_TITLE:
            return {...state, title: action.payload}
        default:
            return state
    }
}