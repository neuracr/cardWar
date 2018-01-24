import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../game-manager.service';
import { Player } from '../back/player';
import { MainService } from '../main.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameManager: GameManagerService, private mainService : MainService) { }
  player: Player;
  ngOnInit() {
    this.player = this.mainService.getPlayer();
    if (this.player.username == "") {
      this.player.username = "UnknownPlayer";
    }
  }

  public moveCard(img :HTMLImageElement) { 
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
