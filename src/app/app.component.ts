import { Component } from '@angular/core';
import { BoardAndPlayComponent } from './board-and-play/board-and-play.component';
@Component({
  providers: [BoardAndPlayComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Snakes And Ladders';

  constructor(public boardComp: BoardAndPlayComponent){}
}
