import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule} from './nav/nav.module';
import { HomeComponent } from './home/home.component';
import { SocksComponent } from './socks/socks.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoesComponent } from './shoes/shoes.component';
import { TrousersComponent } from './trousers/trousers.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { BlousesComponent } from './blouses/blouses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocksComponent,
    ShoesComponent,
    TrousersComponent,
    ShirtsComponent,
    BlousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
