import { SET_AUTHORIZATION, SET_ERROR, SET_STATUS } from './authorization-actions';

const initialState = {
    token: '' || localStorage.getItem('token'),
    timeOfDeathToken: '',
    status: '', // 'loading' 'completed' 'error'
    error: false,
    isAuth: false,
};

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload,
            };
        }
        case SET_AUTHORIZATION: {
            return {
                ...state,
                token: action.payload.token,
                timeOfDeathToken: action.payload.timeToDeath,
                isAuth: true,
            };
        }
        default:
            return state;
    }
};
