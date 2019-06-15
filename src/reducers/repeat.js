import { FETCH_ACTIVITY } from '../actions/fetchActivityAction';

export default function repeat(state = [], action) {
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
