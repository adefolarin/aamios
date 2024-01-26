import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KcileregPage } from './kcilereg.page';

const routes: Routes = [
  {
    path: '',
    component: KcileregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KcileregPageRoutingModule {}
