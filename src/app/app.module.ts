import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OwlComponent } from './owl.component';
import { SpeechBubbleComponent } from './speech-bubble.component'
import { LeafComponent } from './leaf.component';

@NgModule({
  declarations: [
    AppComponent,
    OwlComponent,
    SpeechBubbleComponent
    LeafComponent
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
