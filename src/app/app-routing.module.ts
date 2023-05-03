import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'schedule',
    loadChildren: () => import('./components/schedule/schedule.module').then((module) => module.ScheduleModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
