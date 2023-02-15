import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { SpinnerComponent } from "src/app/shared/spinner/spinner/spinner.component";
import { loginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./pages/login/login.component";


@NgModule({
    declarations:[
        LoginComponent, 
        SpinnerComponent
    ],
    imports:[
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        loginRoutingModule, 
        MatProgressSpinnerModule,
    ],
    providers: [ 
      ],
})
export class loginModule{

}