import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivetvPageRoutingModule } from './livetv-routing.module';

import { LivetvPage } from './livetv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivetvPageRoutingModule
  ],
  declarations: [LivetvPage]
})
export class LivetvPageModule {}
