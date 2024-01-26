import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayersPage } from './prayers.page';

const routes: Routes = [
  {
    path: '',
    component: PrayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayersPageRoutingModule {}
