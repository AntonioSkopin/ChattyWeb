import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInput } from '../components/authorization/models/loginInput';
import { LoginResult } from '../components/authorization/models/loginResult';
import { User } from '../components/authorization/models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {

  private _apiUrl = "https://localhost:5001/api/Auth/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) { }

  login(loginInput: LoginInput): Observable<LoginResult> {
    return this._http.post<LoginResult>(this._apiUrl + "Login", loginInput, this.httpOptions);
  }

  register(user: User): Observable<User> {
    return this._http.post<User>(this._apiUrl + "Register", user, this.httpOptions);
  }
}
