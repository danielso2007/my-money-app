const INITIAL_STATE = { selected: '' };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload.data };
        default:
            return state;
    }
};