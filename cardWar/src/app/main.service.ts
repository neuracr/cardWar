import { Injectable } from '@angular/core';
import { Player } from './back/player';

@Injectable()
export class MainService {

  player: Player = {
    id: 0,
    username: '',
    score: 0,
    stack: null,
  }
  constructor() { }

  getPlayer(): Player {
    return this.player;
  }

  setPlayerUsername(name: string): void {
    this.player.username = name;
    console.log(name);
  }

}
