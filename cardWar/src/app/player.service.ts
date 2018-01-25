import { Injectable } from '@angular/core';
import { Player } from './back/player';
import { MainService } from './main.service';
import { Card } from './back/card';
import { GameManagerService } from './game-manager.service';

@Injectable()
export class PlayerService {
  player: Player;

  constructor(private mainService: MainService, private gameManager: GameManagerService) {
    console.log("initialisation du player");
    this.player = { id: 0, username: "", score: 0, pack: [] };
    this.gameManager.pushPack1.subscribe((packToCopy:Card[]) =>  this.addToPack(packToCopy));
 
  }
  
private addToPack(toCopy: Card[]){
  console.log(toCopy);
  while (toCopy.length != 0){
    this.player.pack.unshift(toCopy.pop());
  }
}

  public playACard(): void {
    console.log("playerService.playACard()" + this.player.pack.length);
    console.log(this.player.pack);
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
