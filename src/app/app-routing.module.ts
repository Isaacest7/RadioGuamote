import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'redes',
    loadChildren: () => import('./redes/redes.module').then( m => m.RedesPageModule)
  },
  {
    path: 'sobrenosotros',
    loadChildren: () => import('./sobrenosotros/sobrenosotros.module').then( m => m.SobrenosotrosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
