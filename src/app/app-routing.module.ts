import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';

const routes: Routes = [{path:"header", component:HeaderComponent},
  {path:"dataBinding",component:DataBindingComponent},
  {path:"catreVisite", component:CarteVisiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
