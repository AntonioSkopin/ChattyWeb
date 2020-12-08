import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpAuthService } from 'src/app/http-services/http-auth.service';
import { LoginUser } from '../actions/auth.action';
import { LoginInput } from '../models/loginInput';
import { LoginResult } from '../models/loginResult';
import { AuthState } from '../reducers/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _authStore: Store<AuthState>,
    private _httpAuthService: HttpAuthService,
  ) { }

  //storage
  storageLoginResult(loginResult: LoginResult) {
    this._authStore.dispatch(new LoginUser(loginResult));
  }

  // api
  login(loginInput: LoginInput) {
    return this._httpAuthService.login(loginInput);
  }
}
