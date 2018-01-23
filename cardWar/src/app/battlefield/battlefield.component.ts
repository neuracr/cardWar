import { Component, OnInit } from '@angular/core';
import { Card } from '../back/card';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css']
})
export class BattlefieldComponent implements OnInit {

  cards1: Card[]; //store the cards played by player 1. (1 or a stack in case of war)
  cards2: Card[]; //same for player 2

  constructor() { }

  ngOnInit() {
  }

}
