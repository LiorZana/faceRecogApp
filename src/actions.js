import { 
    CHANGE_INPUT_FIELD,
} from "./constants"

export const setInputField = (text) => ({
    type: CHANGE_INPUT_FIELD,
    payload: text
})
