import { Action } from '@ngrx/store';
import { LoginResult } from '../models/loginResult';
import { User } from '../models/user';

export enum ActionTypes {
    LoginUser = '[AuthState] LoginUser',
    NewUser = '[AuthState] NewUser'
}

export class LoginUser implements Action {
    readonly type = ActionTypes.LoginUser;
    constructor(public payload: LoginResult) { }
}

export class NewUser implements Action {
    readonly type = ActionTypes.NewUser;
    constructor(public payload: User) { }
}

export type AuthActions = LoginUser | NewUser;