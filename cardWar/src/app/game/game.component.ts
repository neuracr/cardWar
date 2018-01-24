import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../game-manager.service';
import { Player } from '../back/player';
import { MainService } from '../main.service';
import { Card } from '../back/card'; 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameManager: GameManagerService, private mainService : MainService) { }
  
  //private observablePlayedCard: Observable<Play>
  player: Player;
  visibility: string = "hidden";
  
  ngOnInit() {
    this.player = this.mainService.getPlayer();
    if (this.player.username == "") {
      this.player.username = "UnknownPlayer";
    }
    //this.observablePlayedCard.subscribe(
    //  value => this.playCard(value.card, value.position)
    //)
  }

  public getVisibility() {
    return this.visibility;
  }

  public changeVisibility() {
    if (this.visibility == "visible") {
      this.visibility = "hidden";
    } else {
      this.visibility = "visible";
    }
    
  }

  public playCard(card: Card, position: string): void{
    //mettre ici le code d'affichage de la carte jouée.
    //position donne la position du joueur qui joue la carte ('up' ou 'down')
    console.log('affichage de la carte jouée par le joueur ' + position);


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
