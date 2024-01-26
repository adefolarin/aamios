import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivetvPage } from './livetv.page';

const routes: Routes = [
  {
    path: '',
    component: LivetvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivetvPageRoutingModule {}
