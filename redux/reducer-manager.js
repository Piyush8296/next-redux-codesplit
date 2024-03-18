import { createStore, combineReducers } from "redux";
class ReducerManager {
    constructor() {
        this.initialState = {};
        this.store = {};
        this.reducers = {};
    }

    getReducerInitialState(key){
        return this.initialState[key];
    }

    getFilteredState(initialState) {
        return Object.keys(this.reducers).reduce((prev, element) => {
            if (initialState[element]) {
                return {
                    ...prev,
                    [element]: initialState[element]
                };
            }
            return prev;
        }, {});
    }

    getReducersToInject(asyncReducers) {
        return Object.keys(asyncReducers).reduce((prev, element) => {
            if (!this.reducers[element]) {
                return {
                    ...prev,
                    [element]: asyncReducers[element]
                };
            }
            return prev;
        }, {});
    }

    injectReducer(asyncReducers = {}) {
        const reducerToInject = this.getReducersToInject(asyncReducers);
        if (
            reducerToInject && Object.keys(reducerToInject).length) {
            Object.assign(this.reducers, reducerToInject);
            this.store.replaceReducer(combineReducers(this.reducers));
        }
    }

    configureStore ({baseReducer, initialState, enhancer}) {
        if(typeof window === "object" && Object.keys(this.store).length) return {
            store: this.store
        };
        this.initialState = initialState;
        this.reducers = {
            ...this.reducers,
            ...baseReducer
        };
        this.store = createStore(combineReducers(this.reducers), this.getFilteredState(initialState), enhancer);
        
        return {
            store: this.store
        };
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ReducerManager();
        }
        return this.instance;
    }
}

export const reducerManager = ReducerManager.getInstance();