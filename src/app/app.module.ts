import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerService } from './player.service';
import { GameService } from './game.service';
import { BoardAndPlayComponent } from './board-and-play/board-and-play.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    BoardAndPlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlayerService,GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
