import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor() { }

  private connect(): WebSocket {
    const ws = new WebSocket(environment.basePath);
    return ws;
  }

  public subscribe(fn: any) {
    let ws = this.connect();
    console.dir(ws);
    ws.onmessage = fn;
  }
}
