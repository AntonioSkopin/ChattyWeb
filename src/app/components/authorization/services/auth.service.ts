import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpAuthService } from 'src/app/http-services/http-auth.service';
import { LoginUser, NewUser } from '../actions/auth.action';
import { LoginInput } from '../models/loginInput';
import { LoginResult } from '../models/loginResult';
import { User } from '../models/user';
import { AuthState } from '../reducers/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _authStore: Store<AuthState>,
    private _httpAuthService: HttpAuthService,
  ) { }

  // Storage
  storeLoginResult(loginResult: LoginResult) {
    this._authStore.dispatch(new LoginUser(loginResult));
  }

  storeNewUser(user: User) {
    this._authStore.dispatch(new NewUser(user));
  }

  // API
  login(loginInput: LoginInput) {
    return this._httpAuthService.login(loginInput);
  }

  register(user: User) {
    return this._httpAuthService.register(user);
  }
}
