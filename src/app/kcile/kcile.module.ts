import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KcilePageRoutingModule } from './kcile-routing.module';

import { KcilePage } from './kcile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KcilePageRoutingModule
  ],
  declarations: [KcilePage]
})
export class KcilePageModule {}
