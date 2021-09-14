import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'loki',
    loadChildren: () => import('./filmes/loki/loki.module').then( m => m.LokiPageModule)
  },
  {
    path: 'invencivel',
    loadChildren: () => import('./filmes/invencivel/invencivel.module').then( m => m.InvencivelPageModule)
  },
  {
    path: 'the-good-doctor-o-bom-doutor',
    loadChildren: () => import('./filmes/the-good-doctor-o-bom-doutor/the-good-doctor-o-bom-doutor.module').then( m => m.TheGoodDoctorOBomDoutorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
