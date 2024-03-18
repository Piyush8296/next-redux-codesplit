import { reducerConstants } from "../../reducer-constants";
import { INITIAL_STATE as testsReducerInitialState, HANDLERS as testsReducerHandler } from "./reducer";

export default {
    [reducerConstants.HOME]: { state: testsReducerInitialState, handler: testsReducerHandler }
};