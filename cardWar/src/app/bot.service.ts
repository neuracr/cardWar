import { Injectable } from '@angular/core';
import { Player } from './back/player';
import { MainService } from './main.service';
import { GameManagerService } from './game-manager.service';

@Injectable()
export class BotService {
  player: Player;
  

  constructor(private mainService: MainService, private gameManager: GameManagerService) {
    this.player = { id: 0, username: "RobbyBot", score: 0, pack: [] };
   }
  
  public playACard(): void {
    console.log("botService.playACard()");
    this.gameManager.playCard(this.player.pack.pop(), this.player);


  }

  public joinGame(): void{
    this.gameManager.joinGame(this.player);
  }

  public getPlayer(): Player {
    return this.player;
  }

}
