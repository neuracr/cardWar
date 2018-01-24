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
        this.player1.pack.push(this.stack[i]);
      } else {
        this.player2.pack.push(this.stack[i]);
      }
    }
  }

public joinGame(player: Player){
  console.log("joined game");
  if (this.player1 == null){
    this.player1 = player;
    //création du bot
    this.player2 = new Player;
  }
  //ne sera jamais executé pour l'instant normalement
  else if (this.player2 == null){
    this.player2 = player;
    this.startGame();
  }
  else{
    console.log("comment est-on arrivé ici ?");
  }
}

  public startGame(): void{
    this.shuffle();
    this.deal()
  }

  public playCard(card: Card, player: Player){

  }



}
