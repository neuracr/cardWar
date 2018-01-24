import { Component, OnInit } from '@angular/core';
import { Card } from '../back/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  private name: string;
  constructor(private value: string, private color: string) { 
    this.name = value + color;
  }

  ngOnInit() {
  }

  getName() {
    return name;
  }

}
