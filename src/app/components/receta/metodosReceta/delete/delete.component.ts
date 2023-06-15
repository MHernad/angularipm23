import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/components/signin/usuario';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  readonly ROOT_URL = "http://localhost:9090"
  
  receta!: string;

  constructor(private router: Router, private http: HttpClient) {
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }

  delete() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token") || " "
    });

    this.http.delete(this.ROOT_URL + "/recetas/" + this.receta, { headers },).subscribe(
      response => {
        console.log(response);
        localStorage.setItem("token", String(response))
      },
      error => {
        console.log(error);
      }
    )
  }
}
