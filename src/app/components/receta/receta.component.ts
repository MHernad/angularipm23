import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../signin/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent {
  constructor(private router: Router, private http: HttpClient) {
  }

  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
