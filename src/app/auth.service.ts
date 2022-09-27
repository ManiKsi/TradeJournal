import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}
  //sign in with google
  googleSignIn() {
    return this.fireauth
      .signInWithPopup(new GoogleAuthProvider())
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/']);
      });
  }
  //Sign Out
  signOut() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
