import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UsuarioService } from "src/app/services/service.index";
import { Usuario } from "src/app/models/usuario.model";

declare function init_plugins();

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, public usuarioService: UsuarioService) {}
  email: string;
  recuerdame: boolean;
  ngOnInit() {
    init_plugins();
    this.email = localStorage.getItem("email") || "";
    this.recuerdame = this.email.length > 0;
  }

  ingresar(f: NgForm) {
    const usuario: Usuario = new Usuario(null, f.value.email, f.value.password);

    if (this.recuerdame) {
      localStorage.setItem("email", usuario.email);
    } else {
      localStorage.removeItem("email");
    }

    this.usuarioService.login(usuario, this.recuerdame).subscribe(login => {
      this.router.navigate(["/dashboard"]);
    });
    // console.log(f.value);
    // this.router.navigate(["/dashboard"]);
  }
}
