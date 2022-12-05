import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basics-assignment-three';

  show: boolean = true;
  logs: any[] = [];
  clickNumber: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  isShow() {
    this.show = !this.show;
    this.clickNumber++
    this.logs.push(`Click number: ${this.clickNumber}`)
  }

  getColor() {
    if (this.clickNumber >= 5) {
      return 'blue'
    } else {
      return 'white'
    }
  }
}
