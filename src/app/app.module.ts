import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { GreetingComponent } from './greeting/greeting.component';
import { SearchComponent } from './search/search.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { NewtradeComponent } from './newtrade/newtrade.component';
import { FormsModule } from '@angular/forms';
import { TradesService } from './services/trades.service';
import { DatabaseService } from './services/database.service';
import { FundsService } from './services/funds.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const config = {
  apiKey: 'AIzaSyDV6z32Ge0J1RFvdcqtD_z0CeZhNopoORY',
  authDomain: 'trading-journal-78f65.firebaseapp.com',
  projectId: 'trading-journal-78f65',
  storageBucket: 'trading-journal-78f65.appspot.com',
  messagingSenderId: '320702597751',
  appId: '1:320702597751:web:1147c9e57f1b9151d1d472',
  measurementId: 'G-BX70CDNJ8R',
};
@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    GreetingComponent,
    SearchComponent,
    ItemsComponent,
    ItemComponent,
    NewtradeComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    HttpClientModule,
  ],
  providers: [TradesService, DatabaseService, FundsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
