import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  constructor() { }
  initialLists : any = [];
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
    },
    {
      "id":"812",
      "name": "ROHAN",  
      "carowner": "USMAN", 
      "carname" : "Auris TZ445",
      "invoice": "GP-LCVUZK-610", 
      "created": "SAKSHI",  
      "date": "22 FEB 2021 02:30 PM",
      "total": "AED 799.30", 
      "due": "AED 772"  
    },
    {
      "id":"813",
      "name": "Jack",  
      "carowner": "Ahmad", 
      "carname" : "Auris TR345",
      "invoice": "GP-LCVUZK-612", 
      "created": "VIDYUT",  
      "date": "28 FEB 2021 12:30 PM",
      "total": "AED 799.30", 
      "due": "AED 772"  
    },
    {
      "id":"814",
      "name": "ROHAN",  
      "carowner": "NADER", 
      "carname" : "Abarth OTHERS PETROL 2384SYDVUNX",
      "invoice": "GP-LCVUZK-612", 
      "created": "VIDYUT",  
      "date": "28 FEB 2021 12:30 PM",
      "total": "AED 729.30", 
      "due": "AED 272"  
    },
    {
      "id":"815",
      "name": "JILL",  
      "carowner": "Ahmad", 
      "carname" : "Auris TR345",
      "invoice": "GP-LCVUZK-612", 
      "created": "VIDYUT",  
      "date": "28 FEB 2021 12:30 PM",
      "total": "AED 799.30", 
      "due": "AED 772"  
    },
    {
      "id":"816",
      "name": "Jack",  
      "carowner": "ASHOK", 
      "carname" : "Auris TR345",
      "invoice": "GP-LCVUZK-612", 
      "created": "VIDYUT",  
      "date": "28 FEB 2021 12:30 PM",
      "total": "AED 789.70", 
      "due": "AED 172"  
    },
    {
      "id":"817",
      "name": "JILL",  
      "carowner": "USMAN", 
      "carname" : "Abarth OTHERS PETROL 2244SYDVUNX",
      "invoice": "GP-LCVUZK-612", 
      "created": "VIDYUT",  
      "date": "28 FEB 2021 12:30 PM",
      "total": "AED 799.30", 
      "due": "AED 772"  
    },
    {
      "id":"818",
      "name": "ROHAN",  
      "carowner": "Ahmad", 
      "carname" : "Auris TR245",
      "invoice": "GP-LCVUZK-612", 
      "created": "VIDYUT",  
      "date": "28 FEB 2021 12:30 PM",
      "total": "AED 569.30", 
      "due": "AED 111"  
    },
    {
      "id":"819",
      "name": "ROHAN",  
      "carowner": "NADER", 
      "carname" : "Abarth OTHERS PETROL 2344SYDVUNX",
      "invoice": "GP-LCVUZK-612", 
      "created": "VIDYUT",  
      "date": "28 FEB 2021 12:30 PM",
      "total": "AED 799.30", 
      "due": "AED 772"  
    },
    {
      "id":"820",
      "name": "ROHAN",  
      "carowner": "NADER", 
      "carname" : "Abarth OTHERS PETROL 2344SYDVUNX",
      "invoice": "GP-LCVUZK-612", 
      "created": "VIDYUT",  
      "date": "28 FEB 2021 12:30 PM",
      "total": "AED 799.30", 
      "due": "AED 772"  
    }
];
wipLists : any = [
];
readyLists : any = [ 
];
paymentLists : any  = [
];
drop(event: CdkDragDrop<any []>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
}
ngOnInit(): void {}
}
