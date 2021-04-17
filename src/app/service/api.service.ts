import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_key= '449954af0df34f1a8a241e78ea2acf9f'
  constructor( private http:HttpClient ) {}
 getCountryheadlines(country:string){
   return this.http.get("https://newsapi.org/v2/top-headlines?country="+ country+"&apiKey="+this.api_key)
 }
 searchTopic(keyword:string){
return this.http.get("https://newsapi.org/v2/everything?q="+keyword+"%language=en&apiKey="+this.api_key)
 }
}
