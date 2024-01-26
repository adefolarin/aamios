import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Livetv2Page } from './livetv2.page';

const routes: Routes = [
  {
    path: '',
    component: Livetv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Livetv2PageRoutingModule {}
