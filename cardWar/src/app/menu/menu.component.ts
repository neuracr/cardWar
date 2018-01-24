import { Component, OnInit } from '@angular/core';
import { Player } from '../back/player';
import { MainService } from '../main.service';

@Component({
  selector: 'app-menu', 
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  player: Player;
  constructor(private mainService: MainService) { }

  getPlayer(): void {
    this.player = this.mainService.getPlayer();
    if (this.player.username == "UnknownPlayer") {
      this.player.username = "";
    }
  }

  startGame(): void{
    console.log("menu component start game");
    this.mainService.startGame();

  }

  ngOnInit() {
    this.getPlayer();
  }

}
