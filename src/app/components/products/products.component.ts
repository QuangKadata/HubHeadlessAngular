import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  apiURL = environment.apiURL;
  data: any = [{}];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiURL + '/users').subscribe(data =>{
      this.data = data;
    })
  }

}
