import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // username = new FormControl();
  registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor() {}

  // ngOnInit() {
  //   this.username.valueChanges.subscribe((value) => {
  //     console.log('username: ', value);
  //   });

  //   this.username.setValue('MAYDAY');
  // }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe((value) => {
      console.log('Register: ', value);
    });

    this.registerForm.setValue({
      username: 'MAYDAY',
      password: '19970329',
    });
  }

  onSubmit() {
    console.log('Submit: ', this.registerForm.value);
  }
}
