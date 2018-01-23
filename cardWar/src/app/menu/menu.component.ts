import { Component, OnInit } from '@angular/core';
import { Player } from '../back/player';

@Component({
  selector: 'app-menu', 
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  player: Player = {
    id: 0,
    username: '',
    score: 0,
    stack: null,
  };
  constructor() { }

  ngOnInit() {
  }

}
