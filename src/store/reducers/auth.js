import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
}

const authSucces = (state, action) => {
    return updateObject(state, { 
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    })
}

const authFailure = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSucces(state, action);
        case actionTypes.AUTH_FAILURE:
            return authFailure(state, action);
        default: 
            return state;
    }
}

export default reducer;
