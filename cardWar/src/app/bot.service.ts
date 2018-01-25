import { Injectable } from '@angular/core';
import { Player } from './back/player';
import { MainService } from './main.service';
import { GameManagerService } from './game-manager.service';

@Injectable()
export class BotService {

  player: Player;
  

  constructor(private mainService: MainService, private gameManager: GameManagerService) {
    this.player = { id: 0, username: "RobbyBot", score: 0, pack: [] };
    console.log("initialisation du bot");
    this.gameManager.pushBotCommand.subscribe((command:string) => this.runCommand(command));

  }
  
  public playACard(): void {
    console.log("botService.playACard()");
    this.gameManager.playCard(this.player.pack.pop(), this.player);
  }

  private runCommand(command: string): void {
    //run the command on the bot asked by the game manager
    switch(command){
      case "playCard":{
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
