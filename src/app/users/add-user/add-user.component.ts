import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder,
              private userService:UserService,
              private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl(''),
    })
  }

  createUser(){
    this.userService.addUser(this.addUserForm.value).subscribe(data=>{
        this._snackbar.open("User Created!")
    },
    err => {
      this._snackbar.open("User Not Created. Try again later.")
    });
  }

}
