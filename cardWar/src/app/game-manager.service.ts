import { Injectable } from '@angular/core';
import { Card } from './back/card';
import { CARDS } from './back/mock-cards';
import { Player } from './back/player';

@Injectable()
export class GameManagerService {

  stack: Card[] = CARDS;
  player1: Player;
  player2: Player;


  constructor() { }

  shuffle(): void {
    for (let i = this.stack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      this.stack[i], this.stack[j] = this.stack[j], this.stack[i];
    }
  }

  deal(): void{
    for (let i = this.stack.length - 1; i > 0; i--) {
      if (i> (this.stack.length/2-1)) {
        this.player1.stack.push(this.stack[i]);
      } else {
        this.player2.stack.push(this.stack[i]);
      }
    }
  }

  public startGame(player1: Player, player2: Player): void{
    this.player1 = player1;
    if (player2 == null){
      this.player2 = new Player();
    }
    else{
      this.player2 = player2;
    }

    this.shuffle();
    this.deal()
  }

  public playCard(card: Card, player: Player){

  }



}
