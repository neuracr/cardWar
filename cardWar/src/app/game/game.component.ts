import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameManager: GameManagerService) { }

  ngOnInit() {
  }

}
