import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DemoService {

  url:any;

  constructor(private http:HttpClient){     
    this.url = 'https://dummyjson.com';
  }

  listar(){
    return this.http.get(`${this.url}/products`);
  }

}