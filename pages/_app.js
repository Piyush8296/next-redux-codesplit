import { Fragment } from "react";
import { applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import ReduxProvider from '../provider';
import { reducerManager } from "../redux/reducer-manager";
import { getReducerState } from "../redux/get-reducer-state"
import baseReducer from "../base-reducer";
import "@/styles/globals.css";

const middlewares = [thunk];
const DEBUG = process.env.NODE_ENV === "development";
const composeEnhancers =
  typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    DEBUG ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extensions options like name
      // actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const Main = ({ Component, pageProps }) => {
  const { store } = reducerManager.configureStore({
    baseReducer: getReducerState(baseReducer),
    initialState: pageProps || {},
    enhancer
  });

  return (
    <ReduxProvider store={store}>
      <main>
        <Component />
      </main>
    </ReduxProvider>
  );
}

export default Main;