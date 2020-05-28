import { UPDATE_CONTACTS } from "../constants";

const updateContacts = (payload) => ({
    type: UPDATE_CONTACTS,
    payload
});

export { updateContacts };