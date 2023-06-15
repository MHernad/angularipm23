import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/components/signin/usuario';
import { Medida } from '../Medida';
import { cosas } from '../cosas';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  readonly ROOT_URL = "http://localhost:9090"
  
  nombre!: string;
  descripcion!: string;
  cantidad!: number;
  medida!: Medida;

  constructor(private router: Router, private http: HttpClient) {
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }

  post() {

    const data: cosas = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      cantidad: this.cantidad,
      medida: this.medida
    }

    console.log(localStorage.getItem("token"));

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token") || " "
    });

    this.http.post(this.ROOT_URL + "/recetas", data, { headers: _headers }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
