import { Component, OnInit } from '@angular/core';
import { DisplayServiceService } from '../display-service.service';

class Pair<T1, T2>
{
  public firstVal: T1;
  public secondVal: T2;

  constructor(x: T1, y: T2){
    this.firstVal = x;
    this.secondVal = y;
  }

  first()
  {
    return this.firstVal;
  }

  second()
  {
    return this.secondVal;
  }

}
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})

export class OfferComponent implements OnInit {

  public IfDisplay: boolean;


  public offers: Pair<String, String>[] = [];
  public photos: String[] = ['../assets/trousers.avif', '../assets/sunglasses.avif', '../assets/socks.avif', '../assets/tie.avif'];
  public description: String[] = ['spodnie', 'okulary słoneczne', 'skarpery', 'krawaty'];

  constructor(public service: DisplayServiceService){
    this.IfDisplay = true;
    service.aha();
    
    for(let i = 0; i < this.description.length; i++)
      this.offers[i] = new Pair<String, String>(this.photos[i], this.description[i]);

  }

  toogleVisibility()
  { 
    if(this.IfDisplay == false)
      this.IfDisplay = true;
    else
      this.IfDisplay = false; 
  }

  ngOnInit(): void 
  { 
    console.log(10)
  }

}
