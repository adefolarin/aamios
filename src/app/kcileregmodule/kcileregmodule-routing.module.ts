import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KcileregmodulePage } from './kcileregmodule.page';

const routes: Routes = [
  {
    path: '',
    component: KcileregmodulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KcileregmodulePageRoutingModule {}
