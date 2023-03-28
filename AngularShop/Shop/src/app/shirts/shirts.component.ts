import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['../main_content.css']
})
export class ShirtsComponent implements OnInit {

  shirts = ['/assets/shirts.jpg']
  
  constructor() { }

  ngOnInit(): void {
  }

}
