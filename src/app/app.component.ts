import { Component,} from '@angular/core';
import { ApiService } from './service/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';
  headline:{status:string,totalResults:number,articles:any}
  articles:[]
  search:string=""
  status:boolean=false
  Name:string="India";
  Country_Name:Array<string>; 
  article_Number:Number
  country:string ="in"
 constructor(private api:ApiService ){
  console.log('app component constructor called');
 }
 
country_List:{}={
  'in':'India','us':'United States',"ar":'Argentina','at':'Austria','au':'Australia','be':'Belgium','ca':'Canada',
  'cn':'China','gb':'United Kingdom','mx':'Mexico','no':'Norway',
  'nz':'New Zealand','ru':'Russian Federation','sg':'Singapore'
}

newsSearch(){
  this.status=false
let searchWordArray=this.search.split(" ")
let searchWord=searchWordArray.join("+")
this.api.searchTopic(searchWord).subscribe(
  (headline:{status:string,totalResults:number,articles:any})=>{
    this.headline=headline;
    this.article_Number=headline.totalResults
    if (this.headline.status==="ok") {
      this.status=true;
      this.articles=this.headline.articles;
      this.search=""
    }
   if (this.headline.status!= "ok") {
     this.status=false;
     this.search=""
     alert("server not responding Try again")
     return this.ngOnInit()
   }  
  }
)
}


Headline_of_different_country(countryName:string){
 let i =  this.Country_Name.indexOf(countryName);
 this.country=Object.keys(this.country_List)[i]
 this.Name=countryName;
 return this.ngOnInit();
}

ngOnInit(): void {
  this.Country_Name = Object.values(this.country_List)
    this.api.getCountryheadlines(this.country).subscribe(
    (headline:{status:string,totalResults:number,articles:any})=>{
      this.headline=headline;
      this.article_Number=headline.totalResults
      if (this.headline.status==="ok") {
        this.status=true;
        this.articles=this.headline.articles;
      }
     if (this.headline.status!= "ok") {
       this.status=false;
       return alert("server not responding Try again")
     }  
    }
  )
}
}
