import gql from 'graphql-tag';
import { client } from '../index';

export const FETCH_USER = 'FETCH_USER';

function fetchUser(data) {
    return { type: FETCH_USER, data };
}

export default function fetchUserAction() {
    return function action(dispatch) {
        client
            .query({
                // update queries with schema
                query: gql`
                    query {
                        getUser {
                            User {
                                name
                                id
                                email
                                preferences {
                                    id
                                }
                            }
                        }
                    }
                `
            })
            .then(data => {
                dispatch(fetchUser(data));
            })
            .catch(error => console.error(error));
    };
}
