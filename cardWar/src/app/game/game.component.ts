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
  
  private observablePlayedCard: Observable<Play>
  player: Player;
  
  ngOnInit() {
    this.player = this.mainService.getPlayer();
    if (this.player.username == "") {
      this.player.username = "UnknownPlayer";
    }
    this.observablePlayedCard.subscribe(
      value => this.playCard(value.card, value.position)
    )
  }

  public playCard(card: Card, position: string): void{
    //mettre ici le code d'affichage de la carte jouée.
    //position donne la position du joueur qui joue la carte ('up' ou 'down')
    console.log('affichage de la carte jouée par le joueur ' + position);
  }


}
