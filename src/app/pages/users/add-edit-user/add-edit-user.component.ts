import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user_list_interface } from '../core/user.interface';
import { DatePipe } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent {
  add_user_Form: FormGroup | any;
  add_user_body: user_list_interface | any
  current_date: any = new Date()
  heder_body_title: string = 'Add User'
  constructor(private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public user_data: user_list_interface,
    public dialogRef: MatDialogRef<UsersListComponent>, ) { }
  ngOnInit() {
    this.form_init()
    console.log(this.user_data)
    if (this.user_data) this.bind_user_data(this.user_data)
  }

  bind_user_data(item: user_list_interface) {
    this.add_user_Form.patchValue(item)
    this.heder_body_title = 'Edit User'
  }
  form_init() {
    this.add_user_Form = new FormGroup({
      email: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      deleteStatus: new FormControl(0),
    })
  }

  add_edit_user() {
    this.add_user_body = this.add_user_Form.value
    const changedValues = Object.keys(this.add_user_Form.controls)
      .filter(key => this.add_user_Form.controls[key].dirty === true)
      .map(key => {
        return { [key]: this.add_user_Form.controls[key].value }
      });
    console.log(changedValues);
    if (this.user_data) {
      if (changedValues.length != 0) {
        // this.add_user_body = {}
        // changedValues.forEach(element => {
        //   this.add_user_body = { ...this.add_user_body, ...element }
        // });
        this.add_user_body.creationDate = this.user_data.creationDate
        this.add_user_body.id = this.user_data.id
        this.dialogRef.close(this.add_user_body);
      }else {
        this.dialogRef.close(undefined);
      }
    } else {
      this.current_date = this.datePipe.transform(this.current_date, 'yyyy-MM-ddThh:mm:ss');
      this.add_user_body.creationDate = this.current_date
      this.dialogRef.close(this.add_user_body);

    }


    console.log(this.add_user_body)
  }
}
