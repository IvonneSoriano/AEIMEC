import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { home } from '../../assets/info/data';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient ) { }

  getHomeData(){

  }
}
