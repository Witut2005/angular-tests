import { Component, OnInit } from '@angular/core';
import { offerSelected } from '../animations';

@Component({
  selector: 'app-trousers',
  templateUrl: './trousers.component.html',
  styleUrls: ['../main_content.css'],
  animations: [offerSelected]
})

export class TrousersComponent implements OnInit {

  trousers = ['/assets/trousers.jpg', 'assets/trousers.jpg']


  constructor() { }

  ngOnInit(): void {
  }

}
