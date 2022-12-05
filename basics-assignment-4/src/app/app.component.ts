import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basics-assignment-four';
  incrementNumber!: number;
  arrayNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  onTick(number: number) {
    this.incrementNumber = number;
    this.arrayNumbers.push(number);
  }

}
