import React from "react";
import { connect } from "react-redux";
import { reducerManager } from "../redux/reducer-manager";
import { getReducerState } from "../redux/get-reducer-state";

export default function withReducer(injectReducers) {
    return (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
        const ConnectedWrappedComponent = connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
        class ReducerInjector extends React.Component {
            constructor(props) {
                super(props);
                this.injectReducer();
            }

            injectReducer() {
                const asyncReducers = getReducerState(injectReducers);
                reducerManager.injectReducer(asyncReducers);
            }

            render() {
                return <ConnectedWrappedComponent {...this.props} />;
            }
        }
        return ReducerInjector;
    };
}