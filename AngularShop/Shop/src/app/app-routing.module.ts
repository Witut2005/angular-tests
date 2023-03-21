import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SocksComponent } from './socks/socks.component';
import { ShoesComponent } from './shoes/shoes.component';
import { TrousersComponent } from './trousers/trousers.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { BlousesComponent } from './blouses/blouses.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shoes', component: ShoesComponent},
  {path: 'socks', component: SocksComponent},
  {path: 'trousers', component: TrousersComponent},
  {path: 'shrits', component: ShirtsComponent},
  {path: 'blouses', component: BlousesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
