import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../game-manager.service';
import { Player } from '../back/player';
import { MainService } from '../main.service';
import { Card } from '../back/card'; 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CARDS } from '../back/mock-cards';
import { Play } from '../back/play'
import { PlayerService } from '../player.service';

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
              private playerService: PlayerService) { 
    for (let i in this.VALUES) {
      for (let j in this.COLORS) {
        this.mock_cards.push(
            {value: this.VALUES[i], color: this.COLORS[j]}
        );
      }
    }
  }
  
  //private observablePlayedCard: Observable<Play>
  private player: Player;
  visibility: string = "visible";
  card_name: string = "url(../img/As.gif)";
  mock_urls : string[] = [];
 
  
  
  ngOnInit() {
    this.player = this.mainService.getPlayer();
    if (this.player.username == "") {
      this.player.username = "UnknownPlayer";
    }
    
    console.log(this.mock_cards);

    for (let i = this.mock_cards.length - 1; i >= 0; i--) {
      this.mock_urls.push("url('../img/"+ this.mock_cards[i].value + this.mock_cards[i].color + ".gif;')");
    }
    

    //this.observablePlayedCard.subscribe(
    //  value => this.playCard(value.card, value.position)
    //)
    this.gameManager.pushPlay.subscribe((data:Play) => this.playCard(data));
  }

  public getVisibility() {
    return this.visibility;
  }

  public onPackClick(): void{
    this.playerService.playACard();
  }

  public changeVisibility() {
    if (this.visibility == "visible") {
      this.visibility = "hidden";
    } else {
      this.visibility = "visible";
    }
  }

  public getImgUrl() {
    console.log(this.card_name);
    return this.card_name;
  }

  public changeCard() {
    this.card_name =  "url(../img/"+this.player.pack[0].value+this.player.pack[0].color+".gif)";
  }

  public playCard(play: Play): void{
    //mettre ici le code d'affichage de la carte jouée.
    //position donne la position du joueur qui joue la carte ('up' ou 'down')
    console.log('affichage de la carte jouée par le joueur ' + play.position);


  }

  public moveCard(img:HTMLImageElement) { 
    
    /*/
    var posTop = 0, posRight = 47;
    var id = setInterval(frame, 10);
    function frame() {
      if (posTop == -90) {
        clearInterval(id);
      } else {
        posTop--;
        posRight = posRight - 0.08;
        elem.style.top = posTop + 'px';
        elem.style.right = posRight + '%'; 
      }
    }/*/
  }


}
