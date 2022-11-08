import { Component, OnInit } from '@angular/core';
import { DisplayServiceService } from '../display-service.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {

  public IfDisplay: boolean;

  offers: string[] = []

  constructor(public service: DisplayServiceService){

    this.IfDisplay = true;
    service.aha();
    this.offers.push('buty');
    this.offers.push('spodnie');
    this.offers.push('koszulki');
    this.offers.push('okulary');
    this.offers.push('okulary');
    this.offers.push('okulary');
    this.offers.push('okulary');
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
