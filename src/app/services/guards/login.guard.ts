import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UsuarioService } from "src/app/services/service.index";

@Injectable({
  providedIn: "root"
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private usuarioService: UsuarioService) {}
  canActivate(): boolean {
    const login = this.usuarioService.estaLogeado();
    if (!login) {
      this.router.navigate(["/login"]);
    }
    return login;
  }
}
