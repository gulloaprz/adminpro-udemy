import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// MÓDULOS
import { FormsModule } from "@angular/forms";
import { ServiceModule } from "./services/service.module";
import { PagesModule } from "./pages/pages.module";
// RUTAS
import { APP_ROUTES } from "./app.routes";
// COMPONENTES
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, FormsModule, APP_ROUTES, ServiceModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
