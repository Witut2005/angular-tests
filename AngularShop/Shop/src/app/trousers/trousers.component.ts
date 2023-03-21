import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trousers',
  templateUrl: './trousers.component.html',
  styleUrls: ['./trousers.component.css']
})
export class TrousersComponent implements OnInit {

  trousers = ['/assets/trousers.jpg', 'assets/trousers.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
