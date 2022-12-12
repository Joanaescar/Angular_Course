import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inative-users',
  templateUrl: './inative-users.component.html',
  styleUrls: ['./inative-users.component.css']
})
export class InativeUsersComponent {
  @Input() users!: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
