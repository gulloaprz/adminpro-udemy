import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { UsuarioService } from "src/app/services/usuario.service";
import { Usuario } from "../models/usuario.model";
import { Router } from "@angular/router";

declare function init_plugins();
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./login.component.css"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router, public usuarioService: UsuarioService) {
    this.form = new FormGroup(
      {
        nombre: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
        password2: new FormControl("", [Validators.required]),
        condiciones: new FormControl(false, [])
      },
      { validators: this.sonIguales("password", "password2") }
    );

    this.form.setValue({
      nombre: "Guadalupe Ulloa",
      email: "guadalupe.ulloa@outlook.com",
      password: "123456",
      password2: "123456",
      condiciones: true
    });
  }

  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const valor1 = group.controls[campo1].value;
      const valor2 = group.controls[campo2].value;

      if (valor1 === valor2) {
        return null;
      } else {
        return { sonIguales: true };
      }
    };
  }

  ngOnInit() {
    init_plugins();
  }

  registrarUsuario() {
    if (this.form["invalid"]) {
      return;
    }

    if (!this.form.value.condiciones) {
      Swal.fire({
        title: "Importante",
        text: "Debe aceptar las condiciones",
        icon: "warning"
      });
    }

    const usuario = new Usuario(
      this.form.value.nombre,
      this.form.value.email,
      this.form.value.password
    );

    this.usuarioService.crearUsuario(usuario).subscribe((usuario: Usuario) => {
      Swal.fire({
        title: "Usuario creado",
        text: usuario.email,
        icon: "success"
      });
      this.router.navigate(["/login"]);
    });
  }
}
