import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  open: any = [];

  @Input('parentData') set parentData(value: any) {
    this.open = { ...value }
  }
  constructor() { }
 
  ngOnInit(): void {}
}
