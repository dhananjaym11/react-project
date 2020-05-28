import { UPDATE_CONTACTS, SET_LOADER } from "../constants";

const updateContacts = (payload) => ({
    type: UPDATE_CONTACTS,
    payload
});

const setLoader = (payload) => ({
    type: SET_LOADER,
    payload
});

export { updateContacts, setLoader };