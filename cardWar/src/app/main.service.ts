import { Injectable } from '@angular/core';
import { Player } from './back/player';

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

  setPlayerUsername(name: string): void {
    this.player.username = name;
  }

}
