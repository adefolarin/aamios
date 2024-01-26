import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NolivetvPage } from './nolivetv.page';

const routes: Routes = [
  {
    path: '',
    component: NolivetvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NolivetvPageRoutingModule {}
