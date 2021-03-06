import { Injectable } from '@angular/core';
import { Player } from './back/player';
import { MainService } from './main.service';
import { Card } from './back/card';
import { GameManagerService } from './game-manager.service';

@Injectable()
export class BotService {

  player: Player;
  

  constructor(private mainService: MainService, private gameManager: GameManagerService) {
    console.log("initialisation du bot");
    this.player = { id: 0, username: "RobbyBot", score: 0, pack: [] };
    this.gameManager.pushBotCommand.subscribe((command:string) => this.runCommand(command));
    this.gameManager.pushPack2.subscribe((packToCopy:Card[]) =>  this.addToPack(packToCopy));
  }
   
 private addToPack(toCopy: Card[]){
   console.log(toCopy);
   while (toCopy.length != 0){
     this.player.pack.unshift(toCopy.pop());
   }
 }

  ngOnInit() {
    this.player = { id: 0, username: "RobbyBot", score: 0, pack: [] };
  }

  public playACard(): void {
    this.gameManager.playCard(this.player.pack.pop(), this.player);
  }

  private runCommand(command: string): void {
    //run the command on the bot asked by the game manager
    switch(command){
      case "playCard":{
        console.log("botCommand: playCard");
        this.playACard();
        break;
      }
      case "joinGame":{
        console.log("botCommand: joinGame");  
        this.joinGame();
        break;
      }
    }

  }

  public joinGame(): void{
    this.gameManager.joinGame(this.player);
  }

  public getPlayer(): Player {
    return this.player;
  }


}
