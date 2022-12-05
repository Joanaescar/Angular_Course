import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serveId: number = 10;
  serveStatus: string = 'Offline'

  constructor() {
    this.serveStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  ngOnInit(): void {

  }

  getServerStatus() {
    return this.serveStatus;
  }

  getColor() {
    return this.serveStatus === 'online' ? 'green' : 'red'
  }
}
