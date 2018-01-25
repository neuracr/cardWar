import { Injectable, EventEmitter } from '@angular/core';
import { Card } from './back/card';
import { CARDS } from './back/mock-cards';
import { Player } from './back/player';
import { GameComponent } from './game/game.component';
import { Play } from './back/play';
import { PlayerService } from './player.service';
import { MainService } from './main.service';
import { BotService } from './bot.service';

@Injectable()
export class GameManagerService {

  stack: Card[] = CARDS;
  shuffledStack: Card[] = [];
  player1: Player;
  player2: Player;
  
  //store the card played on the table by each player
  centralPack1: Card[];
  centralPack2: Card[];

  //emitter to notify the gameComponent to display a card
  pushPlay = new EventEmitter<Play>();
  pushPack1 = new EventEmitter<Card[]>();
  pushPack2 = new EventEmitter<Card[]>();
  pushBotCommand = new EventEmitter<string>();
  pushEvent = new EventEmitter<string>(); //notify war and who won the turn 
  coverForWar: boolean; //set if the card played in this turn should cover the card

  constructor(private mainService: MainService) {
    this.centralPack1 = [];
    this.centralPack2 = [];
    this.coverForWar = false;
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
    console.log(player.username + " joined game in game manager");
    if (this.player1 == null){
      this.player1 = player;
      
      //création du bot
      this.pushBotCommand.emit("joinGame");

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
    //nettoyage des paquets
    this.player1.pack = [];
    this.player2.pack = [];

    //mélange et distribution des cartes
    this.shuffle();
    this.deal();
    
  }

  public playCard(card: Card, player: Player): void {
    console.log("PLAY BY " + player.username);
    if(this.player1 == player){
      //trouver pourquoi la carte est vide
      //console.log("received card from player1");
      this.centralPack1.push(card);
      if (this.coverForWar){
        this.pushPlay.emit( { card: {value: "/", color:"/"} , position: "down" } );
      }
      else{
        this.pushPlay.emit( { card: card, position: "down" } );
      }
        this.pushBotCommand.emit("playCard");
        return;
    }
    else if (this.player2 == player){
      //console.log("received card from player2");
      this.centralPack2.push(card);
      if (this.coverForWar){
        this.pushPlay.emit( { card: {value: "/", color:"/"} , position: "up" } );
      }
      else{
      this.pushPlay.emit( { card: card, position: "up" } );
      }
    }
    else{
      console.log("player unknown from the system.");
      return;
    }

    //check if both players have played
    if (this.centralPack1.length > 0 &&
       this.centralPack1.length == this.centralPack2.length){
        console.log("compare" + this.centralPack1.length + " " + this.centralPack1.length); 
        this.compareCards();
       }
    }

  private compareCards(): void{
    var value1 = this.convertValue( this.centralPack1[this.centralPack1.length-1].value );
    var value2 = this.convertValue( this.centralPack2[this.centralPack2.length-1].value );
    //console.log("comparaison : " + this.centralPack1.length + " " + this.centralPack2.length);
    if (this.coverForWar){
      console.log('compare -> cover');
      this.coverForWar = false;
      this.pushEvent.emit("cover");
    }
    else if (value1 == value2){
      console.log('compare -> war');
      this.pushEvent.emit("war");
      this.coverForWar = true;
    }

    else if (value1 > value2) {
        this.pushEvent.emit("down");
        console.log('compare -> down');
        this.pushPack1.emit(this.centralPack1.concat(this.centralPack2));
        this.centralPack1 = [];
        this.centralPack2 = [];
       }
       
    else {
      this.pushEvent.emit("up");
      //console.log("up remporte le tour")
      this.pushPack2.emit(this.centralPack1.concat(this.centralPack2));
      this.centralPack1 = [];
      this.centralPack2 = [];
    } 
  }

  private convertValue(stringValue: string): number{
    if (!isNaN(Number(stringValue))) {
      if (Number(stringValue) == 0) {
        return 10;
      } else {
        return Number(stringValue);
      }
    } else {
      switch(stringValue) {
        case 'A':
          return 14;
        case 'J':
          return 11;
        case 'Q':
          return 12;
        case 'K':
          return 13;
      }
    }
  }
}
