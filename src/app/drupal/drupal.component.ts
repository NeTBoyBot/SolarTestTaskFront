import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, lastValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UserServiceService } from '../services/user-service.service';

interface IAttributes {
  drupal_internal__nid: string;
  title: string;
}

interface IArticle {
  attributes: IAttributes;
}

@Component({
  selector: 'app-drupal',
  templateUrl: './drupal.component.html',
  styleUrls: ['./drupal.component.scss'],
})
export class DrupalComponent implements OnInit {
  li: any;
  lis: any[] = [];
  endpoint: string = `$=/node/article?sort=title`;
  loading: boolean = false;

  listQuota = 5;
  content = [];
  baseUrl = `$=`;
  path = '/node/article?sort=nid';
  pager = `&page[limit]=${this.listQuota}&include=field_image`;
  prev: string = '';
  next: string = '';
  current: string = '';

  
  constructor(private http: HttpClient,public userSerice:UserServiceService,) {}

  async ngOnInit(): Promise<any> {
  }
  public url:string | ArrayBuffer |null = ""

  public createUser(fio:string,emal:string,date:string,file:string){
    
    this.userSerice.addUser(fio,date,emal,this.url?.toString()).subscribe(res=>{})
    console.log(this.url?.toString())
  }
   

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }


  }
}
