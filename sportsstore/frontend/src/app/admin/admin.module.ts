import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {AdminComponent} from "./admin.component";
import {AuthGuard} from "./auth.guard";
import { ProductTableComponent } from './product-table.component';
import { ProductEditorComponent } from './product-editor.component';
import { OrderTableComponent } from './order-table.component';

let routing = RouterModule.forChild([
  {path: "auth", component: AuthComponent},
  {path: "main", component: AdminComponent, canActivate: [AuthGuard]},
  {path: "**", redirectTo: "auth"}
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    AuthGuard
  ],
  declarations: [
    AuthComponent,
    AdminComponent,
    ProductTableComponent,
    ProductEditorComponent,
    OrderTableComponent
  ]
})
export class AdminModule {
}
