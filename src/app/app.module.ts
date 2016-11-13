import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { OwlComponent } from './owl.component';
import { SpeechBubbleComponent } from './speech-bubble.component'
import { LeafComponent } from './leaf.component';
import { TransactionDetailsComponent } from './transaction-details.component';
import { LoginComponent } from './login.component';


// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyBxOQBeAk9iiNwG7YhXdW9Ibdm7sSlA4jM',
    authDomain: 'yhacks-2016.firebaseapp.com',
    databaseURL: 'https://yhacks-2016.firebaseio.com',
    storageBucket: '',
    messagingSenderId: '233330134232'
};

@NgModule({
  declarations: [
    AppComponent,
    OwlComponent,
    SpeechBubbleComponent,
    LeafComponent,
    TransactionDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'login',
      component: LoginComponent
    }])
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
