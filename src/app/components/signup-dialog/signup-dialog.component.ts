import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css'],
})
export class SignupDialogComponent {
  email: string = "";
  pass: string = "";
  name: string = "";

  constructor(
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    private authService: AuthService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSignUpClick(): void {
    this.authService.signUp(this.email, this.pass, this.name);
    this.onNoClick();
  }
}
