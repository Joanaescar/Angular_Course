import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incrementNumber: number = 0;
  @Output() onTick: EventEmitter<number> = new EventEmitter();
  intervalId!: NodeJS.Timer


  constructor() { }

  ngOnInit(): void {

  }

  onStart() {
    this.intervalId = setInterval(
      () => {
        this.onTick.emit(this.incrementNumber++);
      },
      1000
    );

  }

  onStop() {
    clearInterval(this.intervalId)
  }
}
