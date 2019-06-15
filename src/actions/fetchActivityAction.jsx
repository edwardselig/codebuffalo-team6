import gql from 'graphql-tag';
import { client } from '../index';

export const FETCH_ACTIVITY = 'FETCH_ACTIVITY';

function fetchActivity(data) {
    return { type: FETCH_ACTIVITY, data };
}

export default function fetchActivityAction() {
    return function action(dispatch) {
        client
            .query({
                query: gql`
                    query {
                        Activity {
                    }
                `
            })
            .then(data => {
                dispatch(fetchActivity(data));
            })
            .catch(error => console.error(error));
    };
}
