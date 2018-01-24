import { Component, OnInit } from '@angular/core';
import { Player } from '../back/player';
import { MainService } from '../main.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  player: Player;
  constructor(private mainService : MainService) { }

  ngOnInit() {
    this.player = this.mainService.getPlayer();
  }


}
