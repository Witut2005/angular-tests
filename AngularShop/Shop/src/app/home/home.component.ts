import { Component, OnInit, Input } from '@angular/core';
import { ThemeChange } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ThemeChange]
})
export class HomeComponent implements OnInit {

  @Input() theme = ''

  constructor() { }

  ngOnInit(): void {
  }

}
