import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LokiPageRoutingModule } from './loki-routing.module';

import { LokiPage } from './loki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LokiPageRoutingModule
  ],
  declarations: [LokiPage]
})
export class LokiPageModule {}
