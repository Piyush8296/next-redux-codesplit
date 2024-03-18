import { createTypes } from "../../redux/create-types";

export default createTypes(
    `
        FETCH_DATA
        FETCH_DATA_SUCCESS
        FETCH_DATA_FAILURE
        UPDATE_SSR_STATUS
    `,
    {
        prefix: "test/"
    }
);