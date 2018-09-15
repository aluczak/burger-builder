import axios from 'axios';

import * as actionTypes from './actionsTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_START,
        authData: authData
    }
}

export const authFailure = (error) => {
    return {
        type: actionTypes.AUTH_FAILURE,
        error: error
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCRp4gL-S8TB70AglnSSAnyEjtHoqffuWQ';
        
        if(!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCRp4gL-S8TB70AglnSSAnyEjtHoqffuWQ'
        }
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data));
            }).catch(err => {
                console.log(err);
                dispatch(authFailure(err));
            })
    }
}
