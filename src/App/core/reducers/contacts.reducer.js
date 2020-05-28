import { UPDATE_CONTACTS, SET_LOADER } from "../constants";

const INITIAL_STATE = {
    contacts: [],
    isShow: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_CONTACTS:
            return { ...state, contacts: action.payload };
        case SET_LOADER:
            return { ...state, isShow: action.payload };
        default:
            return state;
    }
}

export default reducer;