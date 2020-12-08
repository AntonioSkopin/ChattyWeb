import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInput } from '../components/authorization/models/loginInput';
import { LoginResult } from '../components/authorization/models/loginResult';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {

  private _apiUrl = "https://localhost:5001/api/Auth/Login";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) { }

  login(loginInput: LoginInput): Observable<LoginResult> {
    return this._http.post<LoginResult>(this._apiUrl, loginInput, this.httpOptions);
  }
}
