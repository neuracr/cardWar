import { Component, OnInit } from '@angular/core';
import { Player } from '../back/player';
import { MainService } from '../main.service';
import { GameManagerService } from '../game-manager.service';
import { PlayerService } from '../player.service';
import { BotService } from '../bot.service';

@Component({
  selector: 'app-menu', 
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  player: Player;
  constructor(private mainService: MainService, 
              private gameManager: GameManagerService,
              private playerService: PlayerService,
              private botService: BotService, ) { }

  /*getPlayer(): void {
    this.player = this.mainService.getPlayer();
    if (this.player.username == "UnknownPlayer" && this.player.id === 0) {
      this.player = new Player;
    }
  }*/

  startGame(): void{
    console.log("menu component start game");
    this.gameManager.joinGame( this.playerService.getPlayer() );

  }

  ngOnInit() {
    this.player = this.playerService.getPlayer();
  }

}
