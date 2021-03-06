import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuard } from "../services/service.index";
import { ProfileComponent } from "./profile/profile.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        canActivate: [LoginGuard],
        component: DashboardComponent,
        data: { titulo: "Dashboard" }
      },
      {
        path: "account-setting",
        component: AccountSettingsComponent,
        data: { titulo: "Ajustes del tema" }
      },
      {
        path: "perfil",
        component: ProfileComponent,
        data: { titulo: "Perfil de usuario" }
      },
      {
        path: "progress",
        component: ProgressComponent,
        data: { titulo: "Progress" }
      },
      {
        path: "graficas1",
        component: Graficas1Component,
        data: { titulo: "Gráficas" }
      },
      {
        path: "promesas",
        component: PromesasComponent,
        data: { titulo: "Promesas" }
      },
      { path: "rxjs", component: RxjsComponent, data: { titulo: "RxJs" } },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
