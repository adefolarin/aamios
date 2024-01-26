import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KcileregmodulePageRoutingModule } from './kcileregmodule-routing.module';

import { KcileregmodulePage } from './kcileregmodule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KcileregmodulePageRoutingModule
  ],
  declarations: [KcileregmodulePage]
})
export class KcileregmodulePageModule {}
