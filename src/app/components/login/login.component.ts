import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../signin/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  readonly ROOT_URL = "http://localhost:9090"
  
  user!: string;
  psw!: string;

  constructor(private router: Router, private http: HttpClient) {
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }

  login() {
    const data: Usuario = {
      nombre: this.user,
      contraseña: this.psw 
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(this.ROOT_URL + "/recetas/ingreso", data, { headers}).subscribe(
      (response:any) => {
        console.log(response.token);
        localStorage.setItem("token", response.token)
        console.log(localStorage.getItem("token"));
        this.router.navigate(["receta"])
      },
      error => {
        console.log(error);
        
      }
    )
  }
}
