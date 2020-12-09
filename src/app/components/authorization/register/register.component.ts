import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarMessageService } from 'src/app/shared/snackbar-message.service';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isOptional = false;
  users: User[] = [];

  // Register form
  persInfo = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });

  accountInfo = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private _snackbarMessageService: SnackbarMessageService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    // Remove white spaces from input
    this.persInfo.value.firstname.trim();
    this.persInfo.value.lastname.trim();
    this.accountInfo.value.username.trim();
    this.accountInfo.value.email.trim();
    this.accountInfo.value.password.trim();

    // Check if required input is not empty
    if (!this.persInfo.value.firstname ||
      !this.persInfo.value.lastname ||
      !this.accountInfo.value.username ||
      !this.accountInfo.value.email ||
      !this.accountInfo.value.password
    ) {
      this._snackbarMessageService.showMessage("Not all fields are filled!", "Close");
      return;
    }

    // Create a new Rel object
    const user: User = new User();
    user.fullname = this.persInfo.value.firstname + " " + this.persInfo.value.lastname;
    user.username = this.accountInfo.value.username;
    user.email = this.accountInfo.value.email;
    user.password = this.accountInfo.value.password;

    // POST data to API
    this._authService.register(user).subscribe(() => {
      this.users.push(user);
      this._authService.storeNewUser(user);
      this._snackbarMessageService.showMessage("Account is created successfully!", "Close");
    });
  }

}
