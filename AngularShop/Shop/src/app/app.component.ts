import { Component, Output, EventEmitter,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {slider} from './route-anim'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider]
})
export class AppComponent {

  fro = 'ni coc'
  title = 'Shop';

  receiveEvent(event:any):void
  {
    this.title = event as unknown as string
    console.log(event)
  }

  prepareRoute(outlet: RouterOutlet):void
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
