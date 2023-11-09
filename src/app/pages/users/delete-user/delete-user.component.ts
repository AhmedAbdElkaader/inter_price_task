import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { user_list_interface } from '../core/user.interface';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  user_name:string = ''
  constructor(@Inject(MAT_DIALOG_DATA) public user_data: user_list_interface,
  public dialogRef: MatDialogRef<UsersListComponent>, ){}

  ngOnInit(){
    console.log(this.user_data)
    this.user_name = `${this.user_data.firstName} ${this.user_data.lastName}`
  }

  delet_user(){
    this.dialogRef.close(true)
  }
}
