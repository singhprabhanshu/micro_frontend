import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';
import { AboutComponent } from './modules/components/about/about.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';



const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'about', component: AboutComponent},
  // {
  //   path: 'about',
  //   loadChildren: () => import('./modules/componentModule/about/about.module')
  //     .then(mod => mod.AboutModule)
  // },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
