import { FETCH_ACTIVITY } from '../actions/fetchActivityAction';

const initialState = {
    activity: null
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVITY:
            return {
                ...state,
                ...{
                    activity: action.data
                }
            };
        default:
            return state;
    }
}
