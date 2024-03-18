import { Provider } from "react-redux";

export default function ReduxProvider({ store, children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};