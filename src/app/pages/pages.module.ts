import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// MODULOS
import { ChartsModule } from "ng2-charts";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule } from "@angular/forms";
// RUTAS
import { PAGES_ROUTES } from "./pages.routes";
// COMPONENTES
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

/**
 * TODO: MOVE TO COMPONENTS MODULE
 */
import { IncrementadorComponent } from "src/app/components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "src/app/components/grafico-dona/grafico-dona.component";
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    AccountSettingsComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    PromesasComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule {}
