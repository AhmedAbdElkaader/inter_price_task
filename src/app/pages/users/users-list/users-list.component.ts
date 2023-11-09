import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/users.service';
import { user_body_request_interface, user_list_interface } from '../core/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  ELEMENT_DATA: user_list_interface[] = [{
    id: 0,
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
    creationDate: "string"
  }];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password', 'creationDate' , 'actions'];
  dataSource: user_list_interface[] | any
  users_body_request: user_body_request_interface | any

  constructor(private user_service: UsersService , 
    private router : Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    
    this.users_body_request = {
      filter: {},
      paginator: {
        page: 1,
        pageSize: 10
      }
    }

    this.all_users()
  }

  // all users
  all_users() {
    this.user_service.all_users(this.users_body_request).subscribe((res: any) => {
      console.log(res)
      this.ELEMENT_DATA = res.dataList
      this.dataSource = this.ELEMENT_DATA;

    })
  }

  // add user
  addUser(){
    const dialogRef = this.dialog.open(AddEditUserComponent ,{
      width : "400px"
    });

    dialogRef.afterClosed().subscribe((res:user_list_interface) => {
      console.log(res)
      if(res){
        this.user_service.add_user(res).subscribe((result:any) => {
          console.log(result)
          if(result.result == true) {
            this.user_service.openSnackBar(result.message)
            this.all_users()
          }else {
            this.user_service.openSnackBar(result.message)
          }
        })
      }
    })
  }

  // edit user
  edit_user(item:user_list_interface){
    const dialogRef = this.dialog.open(AddEditUserComponent ,{
      width : "400px",
      data: item
    });
    dialogRef.afterClosed().subscribe((res:user_list_interface) => {
      console.log(res)
      if(res){
        this.user_service.edit_user(res).subscribe((result:any) => {
          console.log(result)
          if(result.result == true) {
            this.user_service.openSnackBar(result.message)
            this.all_users()
          }else {
            this.user_service.openSnackBar(result.message)
          }
        })
      }
    })
  }

  // delete user
  delete_user(item:user_list_interface){
    const dialogRef = this.dialog.open(DeleteUserComponent ,{
      width : "400px",
      data: item
    });

    dialogRef.afterClosed().subscribe((result:boolean) => {
      if(result == true){
        this.user_service.delete_user(item.id).subscribe((res:any) => {
          console.log(res)
          if(res.result == true) {
            this.user_service.openSnackBar(res.message)
            this.all_users()
          }else {
            this.user_service.openSnackBar(res.message)
          }
        })
      }
    })
  }

  // show user details
  view_user_details(item:user_list_interface){
    this.router.navigate(['pages/users/user_details',item.id])
  }

}
