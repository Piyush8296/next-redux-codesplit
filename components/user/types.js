import { createTypes } from "../../redux/create-types";

export default createTypes(
    `
        SET_NAME
    `,
    {
        prefix: "user/"
    }
);