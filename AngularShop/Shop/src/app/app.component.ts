import { Component, Output, EventEmitter,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fro = 'ni coc'
  title = 'Shop';

  receiveEvent(event:any):void
  {
    this.title = event as unknown as string
    console.log(event)
  }

}
