import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medida } from '../Medida';
import { cosas } from '../cosas';

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.css']
})
export class PatchComponent {

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

  patch() {

    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token") || " "
    });

    let data: cosas = {
      descripcion: this.descripcion || undefined,
      cantidad: this.cantidad || undefined,
      medida: this.medida || undefined
    }

    console.log(data);

    this.http.patch(this.ROOT_URL + "/recetas/" + this.nombre, data, { headers: _headers }).subscribe(
      response => {      
        console.log("Exito", response);
      },
      error => { 
        console.log(":(", error); 
      }
    )
  }
}