import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../game-manager.service';
import { Player } from '../back/player';
import { MainService } from '../main.service';
import { Card } from '../back/card'; 
import { CARDS } from '../back/mock-cards';
import { Play } from '../back/play'
import { PlayerService } from '../player.service';
import { BotService } from '../bot.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  VALUES: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K'];
  COLORS: string[] = ['s', 'h', 'd', 'c'];
  mock_cards : Card[] = [];
  
  constructor(private gameManager: GameManagerService, 
              private mainService : MainService,
              private playerService: PlayerService, 
              private botService: BotService, ) { 
    for (let i in this.VALUES) {
      for (let j in this.COLORS) {
        this.mock_cards.push(
            {value: this.VALUES[i], color: this.COLORS[j]}
        );
      }
    }
  }
  
  //private observablePlayedCard: Observable<Play>
  player: Player;
  visibility: string = "hidden";
  cardUp: string = "";
  cardDown : string = "";
  mock_urls : string[] = [];
  war = "";
  finished: Boolean = false;
 
  
  
  ngOnInit() {
    this.player = this.mainService.getPlayer(); 
    if (this.player.username == "") {
      this.player.username = "UnknownPlayer";
    }
    
    for (let i = this.mock_cards.length - 1; i >= 0; i--) {
      this.mock_urls.push("url('../img/"+ this.mock_cards[i].value + this.mock_cards[i].color + ".gif');");
    }
    this.gameManager.pushPlay.subscribe((data:Play) => this.playCard(data));
    this.gameManager.pushEvent.subscribe((data:string) => this.manageEvent(data) );
  }


  public manageEvent(data: string): void{
    switch(data){
      case "war":
        this.war = "BATAILLE !";
        break;
      case "cover":
        this.war = "cartes recouvertes";
        break;
      case "up":
        this.war = "WarBot gagne ";
      break;
      case "down":
        if (this.playerService.player.username != ''){
        this.war = this.playerService.player.username + " gagne !";
        }
        else{
          this.war = "joueur anonyme gagne ";
        }
        break;
    }
  }


  public getVisibility() {
    return this.visibility;
  }

  public onPackClick(): void{
    this.playerService.playACard();
    //this.changeVisibility();
  }

  public changeVisibility() {
      this.visibility = "visible";
  }

  public playCard(play: Play): void{
    //mettre ici le code d'affichage de la carte jouée.
    //position donne la position du joueur qui joue la carte ('up' ou 'down')
    this.changeVisibility();

    if (play.card !== undefined) {
      if (play.position == "up") {
        this.cardUp = this.whichCard(play.card.value, play.card.color);
      } else {
        this.cardDown = this.whichCard(play.card.value, play.card.color);
      }
    } else {
      this.finished = true;
    }
    

  }

  public whichCard(cardValue, cardColor) {
    var theCard : string = "";
    if (!isNaN(Number(cardValue))) {
      if (Number(cardValue) == 0) {
        theCard = '10';
      } else {
        theCard = cardValue;
      }
    } else {
      switch(cardValue) {
        case 'A':
          theCard = 'As';
        break;
        case 'J':
          theCard = 'Valet';
        break;
        case 'Q':
          theCard = 'Dame';
        break;
        case 'K':
          theCard = 'Roi';
        break;
        case '/':
          theCard = '/';
          break;
      }
    } 
    switch(cardColor) {
      case 's':
        theCard+=" ♠";
      break;
      case 'h':
        theCard+=" ♥";
      break;
      case 'd':
        theCard+=" ♦";
      break;
      case 'c':
        theCard+=" ♣";
      break;
      case '/':
        theCard+="/";
        break;
    }
    return theCard;
  }
}
