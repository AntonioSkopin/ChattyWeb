import * as Actions from '../actions/auth.action'
import { LoginResult } from '../models/loginResult';
import { User } from '../models/user';

export interface AuthState {
    LoginUser: LoginResult;
    NewUser: User;
}

export const initialState: AuthState = {
    LoginUser: null,
    NewUser: null
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
        case Actions.ActionTypes.NewUser: {
            return {
                ...state,
                NewUser: action.payload,
            };
        }
        default: {
            return state;
        };
    }
}​​