import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MenuPageComponent } from './menu-page/menu-page.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuPageComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}