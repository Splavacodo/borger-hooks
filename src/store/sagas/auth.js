import { put } from 'redux-saga/effects'; 

import * as actions from '../actions/actionTypes'; 

export function* logoutSaga(action) { 
    yield localStorage.removeItem('token'); 
    yield localStorage.removeItem('expirationDate'); 
    yield localStorage.removeItem('userId'); 
    yield put({ 
        type: actionTypes.AUTH_LOGOUT
    }); //to actually execute a function, export one in the index file in actions
}