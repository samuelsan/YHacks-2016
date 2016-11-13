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
import { TreePageComponent } from './tree-page.component';


// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyBxOQBeAk9iiNwG7YhXdW9Ibdm7sSlA4jM',
    authDomain: 'yhacks-2016.firebaseapp.com',
    databaseURL: 'https://yhacks-2016.firebaseio.com',
    storageBucket: '',
    messagingSenderId: '233330134232'
    // apiKey: "AIzaSyDV_iUySUSn6bJ-vfD3o4dYHEqerOTtrCg",
    // authDomain: "yhacks-5fb61.firebaseapp.com",
    // databaseURL: "https://yhacks-5fb61.firebaseio.com",
    // storageBucket: "",
    // messagingSenderId: "140954188440"
};

@NgModule({
  declarations: [
    AppComponent,
    OwlComponent,
    SpeechBubbleComponent,
    LeafComponent,
    TransactionDetailsComponent,
    LoginComponent,
    TreePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'home',
      component: TreePageComponent
    }
    ]),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
