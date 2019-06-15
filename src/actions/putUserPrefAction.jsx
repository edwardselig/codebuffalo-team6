import gql from 'graphql-tag';
import { client } from '../index';

export const PUT_USER_PREF = 'PUT_USER_PREF'; // put user preferences into database

function putUserPref(data) {
    return { type: PUT_USER_PREF, data };
}

export default function putUserPrefAction() {
    return function action(dispatch) {
        client
            .mutate({
                mutation: gql`
                    mutation {
                        putPreference {
                            Preference {

                            }
                        }
                    }
                `
            })
            .then(data => {
                dispatch(putUserPref(data));
            })
            .catch(error => console.error(error));
    };
}
