import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  LoginGuard,
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService
} from "./service.index";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    LoginGuard,
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService
  ]
})
export class ServiceModule {}
