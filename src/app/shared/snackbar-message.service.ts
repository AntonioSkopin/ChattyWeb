import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarMessageService {

  constructor(public snackbar: MatSnackBar) { }

  // Display a snackbar message at the bottom of the screen
  showMessage(message: string, close: string) {
    if (message != null) {
      this.snackbar.open(message, close, {
        duration: 5000
      });
    }
  }
}
