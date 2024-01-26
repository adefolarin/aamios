import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestformPage } from './testform.page';

const routes: Routes = [
  {
    path: '',
    component: TestformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestformPageRoutingModule {}
