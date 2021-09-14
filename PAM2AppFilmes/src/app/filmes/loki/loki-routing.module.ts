import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LokiPage } from './loki.page';

const routes: Routes = [
  {
    path: '',
    component: LokiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LokiPageRoutingModule {}
