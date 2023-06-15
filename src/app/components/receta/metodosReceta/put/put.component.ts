import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cosas } from '../cosas';
import { Medida } from '../Medida';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {

  readonly ROOT_URL = "http://localhost:9090"

  descripcion!: string;
  cantidad!: number;
  medida!: Medida;
  receta!: string;


  constructor(private router: Router, private http: HttpClient) {
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }

  put() {

    const data: cosas = {
      descripcion: this.descripcion,
      cantidad: this.cantidad,
      medida: this.medida
    }

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token") || " "
    });

    this.http.put(this.ROOT_URL + "/recetas/" + this.receta, data, { headers: _headers}).subscribe(
      response => {
        console.log("Exito", response);
      },
      error => {
        console.log(":(", error);
      }
    )


  }

}
