import { Component, OnInit} from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Validator
} from "@angular/forms";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      post: ['testPost...', [Validators.minLength(10)]]
    });

    this.myForm.statusChanges.subscribe((data) => console.log(data));

  }

  onSubmit() {
    console.log(this.myForm);
  }

  ngOnInit() {
  }



}
