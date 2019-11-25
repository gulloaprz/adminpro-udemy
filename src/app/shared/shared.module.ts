import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// COMPONENTES
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagenotfoundComponent
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent]
})
export class SharedModule {}
