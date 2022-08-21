import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAndPlayComponent } from './board-and-play/board-and-play.component';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  { path: 'players', component: PlayerListComponent},
  { path: 'board', component: BoardAndPlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
