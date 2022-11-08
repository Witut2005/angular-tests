import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, OfferComponent]
})
export class AppModule { }
