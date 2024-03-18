export const createReducer = (initialState, handlers = {}) => {
    if (!initialState) throw new Error("initial state is required");
    if (!Object.keys(handlers).length) throw new Error("handlers must be an object");
    return (state = initialState, action = null) => {
        if (!action) return state;
        const handler = handlers[action.type];
        if (handler) return handler(state, action);
        return state;
    };
};