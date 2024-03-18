import { createReducer } from "./create-reducer";
import { reducerManager } from "./reducer-manager";
import { resettableReducer } from "./resettable-reducer";

const getState = (key, initialState) => {
    if (
        typeof window === "object" && 
        window.__NEXT_DATA__ && 
        window.__NEXT_DATA__.props && 
        window.__NEXT_DATA__.props.pageProps[key]
    ) {
        return window.__NEXT_DATA__.props.pageProps[key];
    }

    return reducerManager.getReducerInitialState(key) || initialState;
};

const getReducer = (key, state, handler) => {
    return resettableReducer(key)(createReducer(state, handler));
};

export const getReducerState = (asyncReducers) => {
    const reducers = {};
    Object.keys(asyncReducers).forEach((elem) => {
        const state = getState(elem, asyncReducers[elem].state);
        reducers[elem] = getReducer(elem, state, asyncReducers[elem].handler);
    });
    return reducers;
};