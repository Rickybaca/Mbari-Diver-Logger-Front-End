import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogDiverComponent } from './log-diver/log-diver.component';
import { AddDiverComponent } from './add-diver/add-diver.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { LogTrainingComponent } from './log-training/log-training.component';

const routes: Routes = [
  // No specified path (example.com/) goes to HomeComponent
  {
    path: '',
    component: HomeComponent
  },
  // "home" path (example.com/home) goes to HomeComponent
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'log-dive',
    component: LogDiverComponent
  },
  {path: 'add-diver', component: AddDiverComponent},
  {
    path: 'log-training',
    component: LogTrainingComponent
  },
  {
    path: 'add-inventory',
    component: AddInventoryComponent
  },
  {
    path: 'add-equipment',
    component: AddEquipmentComponent
  },
  // To add a new "page", use `ng generate component` and then add a route like the above
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
