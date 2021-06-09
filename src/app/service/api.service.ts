import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_key= environment.api_key
  
  constructor( private http:HttpClient ) {}
 getCountryheadlines(country:string){
   return this.http.get("https://newsapi.org/v2/top-headlines?country="+ country+"&apiKey="+this.api_key)
 }
 searchTopic(keyword:string){
return this.http.get("https://newsapi.org/v2/everything?q="+keyword+"%language=en&apiKey="+this.api_key)
 }
}
