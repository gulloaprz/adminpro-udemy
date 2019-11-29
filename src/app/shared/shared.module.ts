import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// MODULOS
import { RouterModule } from "@angular/router";
// COMPONENTES
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagenotfoundComponent
  ],
  imports: [CommonModule, RouterModule, PipesModule],
  exports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent]
})
export class SharedModule {}
