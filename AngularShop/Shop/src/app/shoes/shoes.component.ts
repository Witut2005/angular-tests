import { Component, OnInit } from '@angular/core';
import { offerSelected } from '../animations';
const toPx = require('unit-to-px').default;
import * as $ from 'jquery'

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['../main_content.css'],
  animations: [offerSelected]
})
export class ShoesComponent implements OnInit {

  shoes = ['/assets/shoes0.jpg', '/assets/shoes1.jpg', '/assets/shoes2.jpg', '/assets/shoes3.jpg', '/assets/shoes0.jpg', '/assets/shoes1.jpg']
  selectedElement = ''

  select(event: any):void
  {

    if(this.selectedElement == event.target.id[1])
    {
      this.selectedElement= '';
      return;
    }

    this.selectedElement = event.target.id[1];

    // const zoomFactor = 1.5;
    
    // const origin = <HTMLImageElement>document.getElementById(String(event.target.id));
    // const copy = <HTMLImageElement>document.getElementById(String(event.target.id))?.cloneNode();
    // document.body.appendChild(copy);

    // let originElementPosition = origin.getBoundingClientRect();
    // let elementPosition = copy.getBoundingClientRect();

    // console.log('origin', originElementPosition)
    // console.log('origin', origin.offsetHeight)

    // copy.setAttribute('id', 'selected');

    // copy.style.height = String(originElementPosition.height) + 'px';
    // copy.style.width = String(originElementPosition.width) + 'px';
    // copy.style.position = 'fixed';

    // // document.body.style.overflow = 'hidden';

    // let left, top;
    
    // left =  Math.abs(originElementPosition.x);
    // top = Math.abs(originElementPosition.y);


    // console.log(window.screen.width, window.screen.height)
    // console.log('left', left, 'top', top)

    // copy.style.left = String(left) + 'px'
    // copy.style.top = String(top) + 'px'
    // copy.setAttribute('class', 'scaleMe');

    // console.log(elementPosition)


  }

  constructor() { }

  ngOnInit(): void {
  }

}
