import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent {  
  readonly ROOT_URL = "http://localhost:9090"
  
  user!: string;
  psw!: string;

  constructor(private router: Router, private http: HttpClient) {
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }

  crearUsuario() {


    const data: Usuario = {
      nombre: this.user,
      contraseña: this.psw 
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(this.ROOT_URL + "/recetas/registro", data, { headers }).subscribe(
      response => {
        
      },
      error => {
        console.log(error);
      }
    )

    this.router.navigate([""])
  }
}
