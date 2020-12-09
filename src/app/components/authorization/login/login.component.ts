import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarMessageService } from 'src/app/shared/snackbar-message.service';
import { LoginInput } from '../models/loginInput';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Create login form
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private _snackbarMessageService: SnackbarMessageService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  login(loginInput) {
    // Remove whitespace from input
    loginInput.username.trim();
    loginInput.password.trim();

    // Check if input is empty
    if (!loginInput.username || !loginInput.password) {
      return;
    }

    // Create user object
    const user: LoginInput = new LoginInput();
    user.username = loginInput.username;
    user.password = loginInput.password;

    // Post data to API
    this._authService.login(user).subscribe(res => {
      this._authService.storeLoginResult(res);
      this._snackbarMessageService.showMessage("Successfull logged in!", "Close");
      // this._router.navigate(['/panel']);
    });
  }

}
