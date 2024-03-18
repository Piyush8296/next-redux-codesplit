export const resettableReducer = (typeToReset) => (originalReducer) => {

    if (!typeToReset) {
        throw new Error("A valid reset type is required.");
    }

    if (typeof originalReducer !== "function") {
        throw new Error("A reducer is required.");
    }

    const resetState = originalReducer(undefined, {});

    return (state = resetState, action) => {
        if (action && action.type === typeToReset) {
            return resetState;
        } else {
            return originalReducer(state, action);
        }
    };
};