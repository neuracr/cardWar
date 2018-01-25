import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../game-manager.service';
import { Player } from '../back/player';
import { MainService } from '../main.service';
import { Card } from '../back/card'; 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Play } from '../back/play'
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameManager: GameManagerService, 
              private mainService : MainService,
              private playerService: PlayerService) { }
  
  private player: Player;
  visibility: string = "hidden";
  
  ngOnInit() {
    this.player = this.mainService.getPlayer();
    if (this.player.username == "") {
      this.player.username = "UnknownPlayer";
    }
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
