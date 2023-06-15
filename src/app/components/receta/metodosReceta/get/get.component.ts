import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { cosas } from '../cosas';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {

  readonly ROOT_URL = "http://localhost:9090"

  recetas: any
  
  constructor(private http: HttpClient, private router: Router) {}

  getRecetas() {

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token") || " "
    });

    this.http.get(this.ROOT_URL + "/recetas", { headers: _headers }).subscribe(
      (response: any) => {
        this.recetas = response
      },
      error => {
        console.log(error.message);
      }
    )
  }
  
  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
