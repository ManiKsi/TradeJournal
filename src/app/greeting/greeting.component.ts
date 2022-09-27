import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
})
export class GreetingComponent implements OnInit {
  user = {
    uid: '',
    displayName: '',
    photoURL: '',
  };
  constructor(
    private auth: AuthService,
    private dataBaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '');
    this.dataBaseService.onLogin(this.user?.uid);
  }
  signOut() {
    this.auth.signOut();
  }
}
