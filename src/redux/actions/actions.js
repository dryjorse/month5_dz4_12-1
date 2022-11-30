import { types } from "../types"

export const changeTitleAction = (newTitle) => {
    return {
        type: types.CHANGE_TITLE,
        payload: newTitle,
    }
}

export const changeTitleThunk = (newTitle) => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(changeTitleAction(newTitle))
        }, 3000)
    }
}