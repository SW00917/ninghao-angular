import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // username = new FormControl();
  // registerForm = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl(),
  // });

  // registerForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   // password: new FormControl('', Validators.minLength(6)),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  // });

  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // constructor() {}
  constructor(private formBuilder: FormBuilder) {}

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

    this.registerForm.statusChanges.subscribe((status) => {
      console.log('Status: ', status);
    });
  }

  onSubmit() {
    console.log('Submit: ', this.registerForm.value);
  }
}
