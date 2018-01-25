import { Injectable } from '@angular/core';
import { Player } from './back/player';
import { GameManagerService } from './game-manager.service'

@Injectable()
export class MainService {

  player: Player = {
    id: 0,
    username: '',
    score: 0,
    pack: null,
  }
  constructor() { }

  getPlayer(): Player {
    return this.player;
  }

  //public startGame(): void{
  //  console.log("main service start game");
  //  this.gameManager.joinGame(this.player);
  //}

  setPlayerUsername(name: string): void {
    this.player.username = name;
  }

}
