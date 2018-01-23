import { Injectable } from '@angular/core';
import { Player } from './back/player';

@Injectable()
export class MainService {

  player: Player = null;
  constructor() { }

  getPlayer(): Player {
    return this.player;
  }

}
