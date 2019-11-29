import { Injectable } from "@angular/core";
import { Usuario } from "src/app/models/usuario.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { SubirArchivoService } from "./service.index";
import Swal from "sweetalert2";

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private subirArchivoService: SubirArchivoService
  ) {
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
    this.usuario = null;
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

  guardarStorage(token: string, usuario: Usuario) {
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    this.cargarStorage();
  }

  actualizarUsuario() {
    const url = `${BASE_URL}/usuario/${this.usuario._id}?token=${this.token}`;
    return this.http.put(url, this.usuario).pipe(
      map((response: any) => {
        console.log(response);
        this.guardarStorage(response.body.token, response.body.usuario);
        return response.body.usuario;
      })
    );
  }

  actualizarImagen(archivo: File) {
    return this.subirArchivoService
      .subirArchivo(archivo, "usuarios", this.usuario._id)
      .then((response: any) => {
        console.log(response);
        this.usuario.img = response.body.img;
        this.guardarStorage(this.token, this.usuario);
        Swal.fire({
          title: "Imagen Actualizada",
          text: response.body.nombre,
          icon: "success"
        });
      })
      .catch(response => {
        console.log(response);
      });
  }
}
