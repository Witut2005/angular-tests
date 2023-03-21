import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blouses',
  templateUrl: './blouses.component.html',
  styleUrls: ['./blouses.component.css']
})
export class BlousesComponent implements OnInit {

  blouses = ['/assets/blouses.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
