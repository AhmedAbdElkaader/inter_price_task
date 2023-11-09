import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../core/users.service';
import { user_list_interface } from '../core/user.interface';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  user_id:number|any
  user_body : user_list_interface|any
  constructor( private activeRouter: ActivatedRoute,private user_service : UsersService){}

  ngOnInit(){
    this.user_id = this.activeRouter.snapshot.paramMap.get('id');
    this.get_user_data()
  }

  get_user_data(){
    this.user_service.user_details(this.user_id).subscribe((res:any) => {
      console.log(res)
      this.user_body = res.result

    })
  }
}
