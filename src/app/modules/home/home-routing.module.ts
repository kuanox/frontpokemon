import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";


const rutas:Routes = [{
    path:'',children:[
        { path:'pokedex', component: HomeComponent},
    ]
}];
@NgModule({
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
})
export class HomeRoutingModule{

}