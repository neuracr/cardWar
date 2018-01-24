import { Injectable } from '@angular/core';
import { Card } from './back/card';
import { CARDS } from './back/mock-cards';
import { Player } from './back/player';

@Injectable()
export class GameManagerService {

  cards: Card[] = CARDS;
  player1: Player;
  player2: Player;


  constructor() { }

  shuffle(): void {
    //mélange des cartes
  }

  deal(): void{
    //distribue les cartes
  
  }

  startGame(player1: Player, player2: Player): void{
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




}
