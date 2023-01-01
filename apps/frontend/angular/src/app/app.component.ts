import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nx-mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-angular';
  constructor(private http: HttpClient) { 
    this.http.get<any>("/api").subscribe((data:any)=>{
      console.log(data);
    });
    console.log("test")
  }
}
