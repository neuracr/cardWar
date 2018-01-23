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
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    BattlefieldComponent,
    CardComponent,
    StackComponent,
    MenuComponent,
    PlayerComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
