import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId: any;
  userDetails: any;
  dataLoaded: boolean = false;
  editUserForm: FormGroup = new FormGroup({});

  constructor(private activatedRouter: ActivatedRoute,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRouter.params.subscribe(data=>{
      this.userId = data.id;
    });
    if (this.userId !== ''){
      //view or read the data
      this.userService.viewuser(this.userId)
        .toPromise()
        .then(data => {
          this.userDetails= data;
          //Object.assign(this.userDetails, data);
          console.log(this.userDetails);

          //build the edit form
          this.editUserForm = this.formBuilder.group({
            'name': new FormControl(this.userDetails.name),
            'email': new FormControl(this.userDetails.email),
            'phone': new FormControl(this.userDetails.phone),
          })
          this.dataLoaded = true;
        }).catch(err => {
          console.log(err);
      })
    }
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(data=>{
        this._snackbar.open("User Updated!")
      },
      err => {
        this._snackbar.open("User Not updated. Try again later.")
      });
  }
}
