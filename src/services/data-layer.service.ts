import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  url = "https://muthu.s3-us-west-2.amazonaws.com/brainapp/data.json";

  constructor(private http: HttpClient) { }

  getData() {
   return this.http.get(this.url);
  }
}
