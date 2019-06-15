import { FETCH_USER } from '../actions/fetchUserAction';

// Set up initial state object
/* const initialState = {
    blogs: []
}; */

const initialState = {
    userID: null,
    prefs: [],
    recs: []
};

export function main(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                ...{
                    // blogs: action.data.data.getBlogs.blogs
                    // replace with proper getUser return
                    userID: action.data.data.getUser.user
                }
            };
        default:
            return state;
    }
}
