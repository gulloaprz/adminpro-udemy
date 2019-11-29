import { Injectable } from "@angular/core";
import { Usuario } from "src/app/models/usuario.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  usuario: string;
  token: string;

  constructor(private router: Router, private http: HttpClient) {
    this.cargarStorage();
  }

  crearUsuario(usuario: Usuario) {
    const url = `${BASE_URL}/usuario`;
    return this.http
      .post(url, usuario)
      .pipe(map((response: any) => response.body));
  }

  login(usuario: Usuario, recuerdame: boolean) {
    const url = `${BASE_URL}/login`;
    return this.http.post(url, usuario).pipe(
      map((response: any) => {
        console.log(response);
        this.guardarStorage(response.body.token, response.body.usuario);

        return true;
      })
    );
  }

  logout() {
    this.usuario = "";
    this.token = "";
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  estaLogeado() {
    return this.token.length > 5;
  }

  cargarStorage() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
    } else {
      this.token = "";
      this.usuario = null;
    }
  }

  guardarStorage(token: string, usuario: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    this.token = token;
    this.usuario = usuario;
  }
}
