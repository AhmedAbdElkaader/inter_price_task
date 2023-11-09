import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url : string  = 'https://eventapistaging.enterprisedev.projectsarea.com/api'

  constructor(private http: HttpClient , private _snackBar: MatSnackBar) { }

  all_users(body:any){
     return this.http.post(`${this.url}/User/GetAll`,body)
  }

  add_user(body:any){
    return this.http.post(`${this.url}/User/Add`,body)
  }

  edit_user(body:any){
    return this.http.put(`${this.url}/User/Update`,body)
  }

  delete_user(id:number){
    return this.http.delete(`${this.url}/User/Delete?id=${id}`)
  }

  user_details(id:number){
    return this.http.get(`${this.url}/User/GetById?id=${id}`)
  }

  openSnackBar(massage:string) {
    this._snackBar.open(massage, 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}

// "filter": {
//   "id": 0,
//   "firstName": "string",
//   "lastName": "string",
//   "password": "string",
//   "email": "string",
//   "creationDate": "2023-10-07T21:13:01.747Z",
//   "deleteStatus": 0
// },
// "sorting": {
//   "column": "string",
//   "direction": "string",
//   "sortingDirection": 0
// },