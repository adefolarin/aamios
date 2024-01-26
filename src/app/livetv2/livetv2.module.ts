import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Livetv2PageRoutingModule } from './livetv2-routing.module';

import { Livetv2Page } from './livetv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Livetv2PageRoutingModule
  ],
  declarations: [Livetv2Page]
})
export class Livetv2PageModule {}
