import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// RUTAS
import { PAGES_ROUTES } from "./pages.routes";
// MODULOS
import { SharedModule } from "src/app/shared/shared.module";
// COMPONENTES
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [CommonModule, SharedModule, PAGES_ROUTES],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule {}
