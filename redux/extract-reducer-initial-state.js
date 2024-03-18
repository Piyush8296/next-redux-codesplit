export default (asyncReducers) => {
    const reducers = {};
    Object.keys(asyncReducers).forEach((elem) => {
        reducers[elem] = asyncReducers[elem].state;
    });
    return reducers;
};