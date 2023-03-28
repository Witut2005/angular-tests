import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socks',
  templateUrl: './socks.component.html',
  styleUrls: ['../main_content.css']
})
export class SocksComponent implements OnInit {

  socks = ['/assets/socks.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
