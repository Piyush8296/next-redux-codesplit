import { reducerConstants } from "./reducer-constants";
import { INITIAL_STATE as userInitialState, HANDLERS as userHandler } from "./components/user/reducer";

const reducers = {
    [reducerConstants.USER]: { state: userInitialState, handler: userHandler }
}

export default reducers;