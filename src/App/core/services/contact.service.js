import * as actions from '../actions';
import { ENV } from "../constants";

export default {
    getContacts: () => {
        return (dispatch) => {
            dispatch(actions.setLoader(true))
            return fetch(ENV + 'contacts.json')
                .then(res => res.json())
                .then(results => {
                    const contacts = Object.keys(results).map(key => (
                        {
                            id: key,
                            ...results[key]
                        }
                    ))
                    dispatch(actions.updateContacts(contacts))
                    dispatch(actions.setLoader(false))
                })
                .catch(error => console.log(error));
        }
    }
}