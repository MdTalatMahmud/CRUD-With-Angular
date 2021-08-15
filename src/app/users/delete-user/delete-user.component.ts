import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  userId: string = '';
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId = data.id;
    });

    if (this.userId){
      this.userService.deleteUser(this.userId).subscribe(data=>{
        this._snackbar.open("User Created!")
      },err => {
        this._snackbar.open("User Not Created. Try again later.")
        })
    }
  }

}
