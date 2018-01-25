import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { CardComponent } from './card/card.component';
import { StackComponent } from './stack/stack.component';
import { MenuComponent } from './menu/menu.component';
import { PlayerComponent } from './player/player.component';
import { MainService } from './main.service';
import { GameComponent } from './game/game.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { GameManagerService } from './game-manager.service';
import { PlayerService } from './player.service';
import { BotService } from './bot.service';


@NgModule({
  declarations: [
    AppComponent,
    BattlefieldComponent,
    CardComponent,
    StackComponent,
    MenuComponent,
    PlayerComponent,
    GameComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [MainService, GameManagerService, PlayerService, BotService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
