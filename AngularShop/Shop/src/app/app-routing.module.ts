import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SocksComponent } from './socks/socks.component';
import { ShoesComponent } from './shoes/shoes.component';
import { TrousersComponent } from './trousers/trousers.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { BlousesComponent } from './blouses/blouses.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'routeAnimations'}},
  {path: 'shoes', component: ShoesComponent, data: {animation: 'routeAnimations'}},
  {path: 'socks', component: SocksComponent, data: {animation: 'routeAnimations'}},
  {path: 'trousers', component: TrousersComponent, data: {animation: 'routeAnimations'}},
  {path: 'shrits', component: ShirtsComponent, data: {animation: 'routeAnimations'}},
  {path: 'blouses', component: BlousesComponent, data: {animation: 'routeAnimations'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
