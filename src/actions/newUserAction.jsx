import gql from 'graphql-tag';
import { client } from '../index';

export const CREATE_USER = 'CREATE_USER';

function createUser(data) {
    return { type: CREATE_USER, data };
}
