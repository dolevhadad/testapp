import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'app';
  mytext = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    this.http.get("http://localhost:9000/hello",{ headers, responseType: 'text'}).subscribe((data: string) => {this.mytext = data});
  }
}
