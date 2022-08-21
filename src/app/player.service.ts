import { Injectable } from '@angular/core';
import { Player } from './player';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PlayerService {

  private playersUrl: string;

  constructor(private http: HttpClient) {
    this.playersUrl = 'http://127.0.0.1:8080/player/getallplayer';
  }

  public findAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl);
  }
}
