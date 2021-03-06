import { Component, OnInit } from "@angular/core";
import { SidebarService, UsuarioService } from "src/app/services/service.index";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: []
})
export class SidebarComponent implements OnInit {
  constructor(
    public usuarioService: UsuarioService,
    public sideBarService: SidebarService
  ) {}

  ngOnInit() {}

  logout() {
    this.usuarioService.logout();
  }
}
