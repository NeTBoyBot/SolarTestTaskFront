import { Component, OnInit,OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { UserServiceService } from '../services/user-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public userservice: UserServiceService) { }

  users :any
  
  ngOnInit(): void {
    this.users = this.getUsers();
    console.log(this.users.length)
  }

  public getUsers(){
    return this.userservice.getUsers();
  }

 

}
