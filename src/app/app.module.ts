import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OwlComponent } from './owl.component';
import { SpeechBubbleComponent } from './speech-bubble.component'

@NgModule({
  declarations: [
    AppComponent,
    OwlComponent,
    SpeechBubbleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
