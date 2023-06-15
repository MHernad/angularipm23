import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { RecetaComponent } from './components/receta/receta.component';
import { DeleteComponent } from './components/receta/metodosReceta/delete/delete.component';
import { GetComponent } from './components/receta/metodosReceta/get/get.component';
import { GetrecetaComponent } from './components/receta/metodosReceta/getreceta/getreceta.component';
import { PostComponent } from './components/receta/metodosReceta/post/post.component';
import { PatchComponent } from './components/receta/metodosReceta/patch/patch.component';
import { PutComponent } from './components/receta/metodosReceta/put/put.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:"signin", component:SigninComponent, title:"signin"},
  {path:"", component:LoginComponent},
  {path:"receta", component:RecetaComponent},
  {path:"receta/get", component:GetComponent},
  {path:"receta/getreceta", component:GetrecetaComponent},
  {path:"receta/delete", component:DeleteComponent},
  {path:"receta/patch", component:PatchComponent},
  {path:"receta/post", component:PostComponent},
  {path:"receta/put", component:PutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    RecetaComponent,
    DeleteComponent,
    GetComponent,
    GetrecetaComponent,
    PostComponent,
    PatchComponent,
    PutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
