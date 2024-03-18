import Types from './types'
import { createReducer } from "../../redux/create-reducer";

export const INITIAL_STATE = {
  data: [],
  error: null,
  isSSR: false,
};

export const fetchDataSuccess = (state = INITIAL_STATE, { data }) => {
  return { ...state, data, error: null };
};

export const fetchDataFailure = (state = INITIAL_STATE, { error }) => {
  return { ...state, data: [], error };
};

export const updateSSRStatus = (state = INITIAL_STATE, { isSSR }) => {
  return { ...state, isSSR };
};

export const HANDLERS = {
    [Types.FETCH_DATA_SUCCESS]: fetchDataSuccess,
    [Types.FETCH_DATA_FAILURE]: fetchDataFailure,
    [Types.UPDATE_SSR_STATUS]: updateSSRStatus
}

export default createReducer(INITIAL_STATE, HANDLERS);