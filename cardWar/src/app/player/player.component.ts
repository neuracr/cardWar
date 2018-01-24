import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../back/player';
import { MainService } from '../main.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  player: Player;
  constructor(private mainService : MainService) { }

  reload(): void{
    this.player = this.mainService.getPlayer();
  }
  ngOnInit() {
    this.player = this.mainService.getPlayer();
  }

}
