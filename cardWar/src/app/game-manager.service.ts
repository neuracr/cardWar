import { Injectable, EventEmitter } from '@angular/core';
import { Card } from './back/card';
import { CARDS } from './back/mock-cards';
import { Player } from './back/player';
import { GameComponent } from './game/game.component';
import { Play } from './back/play';
import { PlayerService } from './player.service';
import { MainService } from './main.service';

@Injectable()
export class GameManagerService {

  stack: Card[] = CARDS;
  shuffledStack: Card[] = [];
  player1: Player;
  player2: Player;
  pushPlay = new EventEmitter<Play>();

  push(value: Play){
    console.log("pushing a play from game service");
    this.pushPlay.emit(value);
  }


  

  constructor(private mainService: MainService) {
   }

  shuffle(): void {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      this.shuffledStack.push(this.stack[j]);
      this.stack.splice(j, 1);
    }
  }

  deal(): void{
    for (let i = this.shuffledStack.length - 1; i >= 0; i--) {
      if (i> (this.shuffledStack.length/2-1)) {
        this.player1.pack.push(this.shuffledStack[i]);
      } else {
        this.player2.pack.push(this.shuffledStack[i]);
      }
    }
  }

  public joinGame(player: Player){
    console.log("joined game in game manager");
    if (this.player1 == null){
      this.player1 = player;
      //création du bot
      this.player2 = new Player
      this.player1.pack = [];
      this.player2.pack = [];

      this.startGame();
      console.log(this.player1.pack);
      console.log(this.player2.pack);
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
    this.deal();
    
  }

  public playCard(card: Card, player: Player): void {
    if(this.player1 == player){
      console.log("received card from player1");
      this.player1.pack.push(card);
      this.pushPlay.emit( { card: card, position: "down" } );
    }
    else if (this.player2 == player){
      console.log("received card from player2");
      //this.
    }
    else{
      console.log("received card from unknown player");
      console.log(player.username);
      return;
    }
}
}
