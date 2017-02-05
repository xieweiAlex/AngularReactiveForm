///<reference path="../my-http-service.service.ts"/>
import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder} from "@angular/forms";
import { MyHttpServiceService } from "../my-http-service.service";

import { Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-my-form',

  templateUrl: './my-form.component.html',
  styles: [`
      .errorMsg{
        color: red;
        font-size: 20px;
      }
  `],
  providers: [MyHttpServiceService]

})

export class MyFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private myHttpService: MyHttpServiceService) {

    this.myForm = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      post: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.myForm.statusChanges.subscribe((data) => console.log(data));
  }

  onSubmit() {
    console.log(this.myForm);
  }

  getData() {
    console.log("try to get somet posts");

    let user = this.myHttpService.getUserData().map(res => res.json());
    let postList = this.myHttpService.getPostData().map(res => res.json());

    Observable.forkJoin([user, postList]).subscribe(result => {

      this.myForm.controls['name'].setValue(result[0]['name']);
      this.myForm.controls['email'].setValue(result[0]['name']);
      this.myForm.controls['post'].setValue(result[1][0]['body']);

      console.log("user: " + result[0]['name']);
      console.log("post: " + result[1][0]['body']);
    });
  }

  ngOnInit() {
  }



}
