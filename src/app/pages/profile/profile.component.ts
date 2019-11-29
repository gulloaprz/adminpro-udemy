import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/service.index";
import { Usuario } from "src/app/models/usuario.model";
import { NgForm } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
  imagenSubir: File;
  imagenTemp: any;
  constructor(public usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit() {}

  guardar(f: NgForm) {
    console.log(f);
    this.usuario.nombre = f.value.nombre;
    this.usuario.email = f.value.email;

    this.usuarioService.actualizarUsuario().subscribe(usuario => {
      Swal.fire({
        title: "Usuario actualizado",
        text: usuario.nombre,
        icon: "success"
      });
    });
  }

  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf("image") < 0) {
      Swal.fire({
        title: "Sólo imágenes",
        text: "El archivo seleccionado no es una imagen",
        icon: "error"
      });

      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => (this.imagenTemp = reader.result);
  }

  cambiarImagen() {
    this.usuarioService.actualizarImagen(this.imagenSubir);
  }
}
