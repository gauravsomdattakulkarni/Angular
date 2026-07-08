import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class WelcomeDataResponse
{
  constructor(public message: string , public status:boolean){

  }
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeData {

  constructor(
    private http: HttpClient
  ) { }

  getWelcomeMessage() {
   return this.http.get<WelcomeDataResponse>('http://localhost:8081/hello-world-bean');
   //this.http.get('http://localhost:8081/hello-world-bean').subscribe();
  //console.log("Welcome Message From Service Welcome Datas get welcome message function");
  }

  getWelcomeMessageWithParameter(name: string) {
    return this.http.get<WelcomeDataResponse>(`http://localhost:8081/hello-world-path-variable/${name}`);
  }
}
