import { Injectable } from '@angular/core';
import { Trade } from '../models/trade.model';
import { TradesService } from './trades.service';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class DatabaseService {
  userData: any = {};
  initialBalance: number = 50000;
  presentBalance: number = 80000;
  lastTermBalance: number = 60000;
  term: number = 2;
  lastTermIndex = 0;
  Trades: Trade[] = [];
  thisTermBalance = 0;
  constructor(private firestore: AngularFirestore) {
    // this.Trades = tradesService.getTrades();
    // this.lastTermIndex = Math.floor(this.Trades.length / 2) * 2;
    // for (let index = this.lastTermIndex; index < this.Trades.length; index++) {
    //   this.thisTermBalance = +this.Trades[index].netPl;
    // }
  }

  onLogin(uid: string) {
    let user: any;
    this.firestore
      .collection('usersData', (ref) => ref.where('uid', '==', uid).limit(1))
      .snapshotChanges()
      .subscribe((res) => {
        user = res.map((e) => {
          return e.payload.doc.data();
        });
        if (user[0] == null) {
          this.firestore.collection('usersData').add({ uid: uid });
        } else {
          this.userData = user[0];
        }
      });
    console.log(this.userData);
  }
  getUserId() {
    console.log(this.userData);
  }
}
// if (e.payload.doc.data()) {
//   this.userData = e.payload.doc.data();
//   console.log('user exits');
// } else {
//   console.log(uid);
//   this.firestore.collection('userData').add({ uid: uid });
// }
