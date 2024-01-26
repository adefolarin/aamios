import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestformPageRoutingModule } from './testform-routing.module';

import { TestformPage } from './testform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestformPageRoutingModule
  ],
  declarations: [TestformPage]
})
export class TestformPageModule {}
