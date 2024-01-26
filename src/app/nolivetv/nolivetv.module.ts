import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NolivetvPageRoutingModule } from './nolivetv-routing.module';

import { NolivetvPage } from './nolivetv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NolivetvPageRoutingModule
  ],
  declarations: [NolivetvPage]
})
export class NolivetvPageModule {}
