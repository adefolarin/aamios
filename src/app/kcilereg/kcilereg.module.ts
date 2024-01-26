import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KcileregPageRoutingModule } from './kcilereg-routing.module';

import { KcileregPage } from './kcilereg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KcileregPageRoutingModule
  ],
  declarations: [KcileregPage]
})
export class KcileregPageModule {}
