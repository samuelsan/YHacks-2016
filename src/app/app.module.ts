import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { OwlComponent } from './owl.component';
import { SpeechBubbleComponent } from './speech-bubble.component'
import { LeafComponent } from './leaf.component';
import { TransactionDetailsComponent } from './transaction-details.component';
import { LoginComponent } from './login.component';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
