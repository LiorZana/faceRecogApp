import { 
    CHANGE_INPUT_FIELD,
} from "./constants"

const initialStateInput = {
    input: '',
}

export const getUrlInput = (state=initialStateInput, action={}) => {
    switch(action.type) {
        case CHANGE_INPUT_FIELD:
            return Object.assign({}, state, { input: action.payload });
        default:
            return state;
    }
}
