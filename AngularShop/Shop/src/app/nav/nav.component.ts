import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()shopName:string = '';
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();
  text:string = 'Shopi';

  constructor() { }
  clickMe() { this.messageEvent.emit(this.text); }

  ngOnInit(): void {
  }

}
