import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageComponent } from './stage/stage.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'stage', component: StageComponent },
  //{ path: '**', component: PageNotFoundComponent }

];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes); 