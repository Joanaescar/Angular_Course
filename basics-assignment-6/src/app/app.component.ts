import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm!: NgForm;
  user = {
    email: '',
    option: '',
    password: ''
  };
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.form.value.userData.email;
    this.user.option = this.signupForm.form.value.userData.subscriptions;
    this.user.password = this.signupForm.form.value.userData.password;

    this.signupForm.reset()
  }
}
