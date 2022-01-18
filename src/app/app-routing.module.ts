import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightsComponent} from "./flights/flights.component";
import {HotelsComponent} from "./hotels/hotels.component";
import {CruisesComponent} from "./cruises/cruises.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then((m) => m.CarsModule)
  },
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'cruises',
    component: CruisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
