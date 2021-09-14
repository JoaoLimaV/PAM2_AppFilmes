import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheGoodDoctorOBomDoutorPage } from './the-good-doctor-o-bom-doutor.page';

const routes: Routes = [
  {
    path: '',
    component: TheGoodDoctorOBomDoutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheGoodDoctorOBomDoutorPageRoutingModule {}
