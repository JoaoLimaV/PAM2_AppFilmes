import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheGoodDoctorOBomDoutorPageRoutingModule } from './the-good-doctor-o-bom-doutor-routing.module';

import { TheGoodDoctorOBomDoutorPage } from './the-good-doctor-o-bom-doutor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheGoodDoctorOBomDoutorPageRoutingModule
  ],
  declarations: [TheGoodDoctorOBomDoutorPage]
})
export class TheGoodDoctorOBomDoutorPageModule {}
