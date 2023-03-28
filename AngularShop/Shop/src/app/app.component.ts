import { Component, Output, EventEmitter,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  mainTheme = 'light';

  themeSwitch():void
  {
    if(this.mainTheme == 'light')
      this.mainTheme = 'dark'
    else
      this.mainTheme = 'light'
  } 

  prepareRoute(outlet: RouterOutlet):void
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

  ngOnInit():void{
  }

}
