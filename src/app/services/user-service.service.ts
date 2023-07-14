import { Injectable } from '@angular/core';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpInternalService } from '../services/http-internal.service';
import { User } from '../models/user';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit {

  constructor(public httpService : HttpInternalService,private http: HttpClient) { }

  public users = this.getUsers();

  public ngOnInit(): void {
    
  }

  public getUsers():Observable<any>{
    return this.http.get<any>("https://localhost:7081/allusers")
  }
}
