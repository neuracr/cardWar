import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BattlefieldComponent } from './battlefield/battlefield.component';
import { CardComponent } from './card/card.component';
import { StackComponent } from './stack/stack.component';


@NgModule({
  declarations: [
    AppComponent,
    BattlefieldComponent,
    CardComponent,
    StackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
