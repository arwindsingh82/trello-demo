import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  openLists : any =  [
    {
      "id":"811",
      "name": "Jack",  
      "carowner": "Ahmad", 
      "carname" : "Auris TR365",
      "invoice": "GP-LCVUZK-612", 
      "created": "VIDYUT",  
      "date": "28 FEB 2021 12:30 PM",
      "total": "AED 799.30", 
      "due": "AED 772"  
    }
];
ngOnInit(): void {}

}
