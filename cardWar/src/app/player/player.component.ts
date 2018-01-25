import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../back/player';
import { MainService } from '../main.service';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  player: Player;
  
  constructor(private mainService : MainService, private gameManager: GameManagerService) { }

  public playACard(): void {
    this.gameManager.playCard(this.player.pack.pop(), this.player);
  }

  ngOnInit() {
    this.player = this.mainService.getPlayer();
  }

  public joinGame(): void{
    this.gameManager.joinGame(this.player);
  }

}
