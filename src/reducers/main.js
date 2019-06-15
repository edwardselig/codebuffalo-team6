import { RECEIVE_BLOGS } from '../actions/ExampleAction';

// Set up initial state object
const initialState = {
    blogs: []
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_BLOGS:
            return {
                ...state,
                ...{
                    blogs: action.data.data.getBlogs.blogs
                }
            };
        default:
            return state;
    }
}
