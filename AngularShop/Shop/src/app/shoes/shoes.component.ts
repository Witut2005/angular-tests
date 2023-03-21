import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  shoes = ['/assets/shoes.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
