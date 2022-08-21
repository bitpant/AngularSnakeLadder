import { Injectable } from '@angular/core';
import { Moves } from './moves';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from './board';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private loadUrl!: string;
  private moveUrl!: string;

  constructor(private http: HttpClient) {
    this.loadUrl="http://localhost:8080/game/loadboard";
   }

   public loadBoard(): Observable<Board> {
    return this.http.get<Board>(this.loadUrl);
  }

  public playMove(id: string): Observable<Moves> {
    this.moveUrl=`http://localhost:8080/game/rollandplay?id=${id}`;
    return this.http.get<Moves>(this.moveUrl);
  }

}
