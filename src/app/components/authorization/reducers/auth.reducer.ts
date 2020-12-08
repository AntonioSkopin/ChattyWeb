import * as Actions from '../actions/auth.action'
import { LoginResult } from '../models/loginResult';

export interface AuthState {
    LoginUser: LoginResult;
}

export const initialState: AuthState = {
    LoginUser: null,
};

export function authReducer(
    state = initialState,
    action: Actions.AuthActions
): AuthState {
    switch (action.type) {
        case Actions.ActionTypes.LoginUser: {
            return {
                ...state,
                LoginUser: action.payload,
            };
        }
        default: {
            return state;
        };
    }
}​​