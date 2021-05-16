import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  url = "https://cognifitapp.s3.us-east-2.amazonaws.com/data.json";

  constructor(private http: HttpClient) { }

  getData() {
   return this.http.get(this.url);
  }
}
