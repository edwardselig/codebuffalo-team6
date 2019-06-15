import { PUT_USER_PREF } from '../actions/putUserPrefAction';

export default function prefs(state = [], action) {
    switch (action.type) {
        case PUT_USER_PREF:
            return {
                ...state,
                ...{
                    recIDs: action.data.data.putUserPref.preference
                }
            };
        default:
            return state;
    }
}
