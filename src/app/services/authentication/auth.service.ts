import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { UserInfo} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<UserInfo | null>;  

  constructor(private auth: AngularFireAuth) {
    this.user$ = auth.authState;
  }

  signUp(email: string, pass: string, name: string) {
    this.auth.createUserWithEmailAndPassword(email, pass).then((result) => {
      result.user?.updateProfile({
        displayName: name,
      });
    });
  }

  login(email: string, pass: string) {
    this.auth.signInWithEmailAndPassword(email, pass).then((result) => {
      console.log(result);
    });
  }

  logout() {
    this.auth.signOut().then(() => {
      console.log("Logged out");
    });
  }
}
