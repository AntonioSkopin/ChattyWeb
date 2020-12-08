import { Action } from '@ngrx/store';
import { LoginResult } from '../models/loginResult';

export enum ActionTypes {
    LoginUser = '[LoginState] LoginUser',
}

export class LoginUser implements Action {
    readonly type = ActionTypes.LoginUser;
    constructor(public payload: LoginResult) { }
}

export type AuthActions = LoginUser;