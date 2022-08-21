import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { GameService } from '../game.service';
import { Moves } from '../moves';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-and-play',
  templateUrl: './board-and-play.component.html',
  styleUrls: ['./board-and-play.component.css']
})
export class BoardAndPlayComponent implements OnInit {
  
   movedetail!: Moves;
   boardlayout!: Board;

  constructor(private gameService: GameService,
    private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
  }

loadGame(): void {
  this.gameService.loadBoard().subscribe(data => {
    this.boardlayout = data;
  });
}

playMove(id:string): void {
  this.gameService.playMove(id).subscribe(data => {
    this.movedetail = data;
  });
}

}
