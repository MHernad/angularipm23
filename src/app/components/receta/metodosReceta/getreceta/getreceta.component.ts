import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getreceta',
  templateUrl: './getreceta.component.html',
  styleUrls: ['./getreceta.component.css']
})
export class GetrecetaComponent {
  readonly ROOT_URL = "http://localhost:9090"

  recetas: any
  receta!: string
  
  constructor(private http: HttpClient, private router: Router) {}

  getRecetas() {

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token") || " "
    });

    this.http.get(this.ROOT_URL + "/recetas/" + this.receta, { headers: _headers }).subscribe(
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
