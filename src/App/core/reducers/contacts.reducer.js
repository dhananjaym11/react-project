import { UPDATE_CONTACTS } from "../constants";

const INITIAL_STATE = {
    contacts: [
        {
            id: 1,
            firstName: "Aa",
            lastName: "Bb",
            email: "aa@gmail.com",
            mobile: "1234567890",
            status: "Active",
        },
        {
            id: 2,
            firstName: "Cc",
            lastName: "Dd",
            email: "cc@gmail.com",
            mobile: "1234567890",
            status: "Inactive",
        },
    ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_CONTACTS:
            return { ...state, contacts: action.payload };
        default:
            return state;
    }
}

export default reducer;