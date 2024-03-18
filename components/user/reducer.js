import { createReducer } from "../../redux/create-reducer";
import Types from "./types";

export const INITIAL_STATE = {
    name: ""
};

export const setName = (state = INITIAL_STATE, { name }) => {
    return { ...state, name };
};

export const HANDLERS = {
    [Types.SET_NAME]: setName
};

export default createReducer(INITIAL_STATE, HANDLERS);