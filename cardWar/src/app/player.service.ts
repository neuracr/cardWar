import { Injectable } from '@angular/core';
import { Player } from './back/player';
import { MainService } from './main.service';
import { GameManagerService } from './game-manager.service';

@Injectable()
export class PlayerService {
  player: Player;
  

  constructor(private mainService: MainService, private gameManager: GameManagerService) {
    this.player = { id: 0, username: "", score: 0, pack: [] };
    console.log("initialisation du player");
 
  }
  
  public playACard(): void {
    console.log("playerService.playACard()");
    this.gameManager.playCard(this.player.pack.pop(), this.player);


  }

  ngOnInit() {
    this.player = this.mainService.getPlayer();
  }

  public joinGame(): void{
    this.gameManager.joinGame(this.player);
  }

  public getPlayer(): Player {
    return this.player;
  }

}
