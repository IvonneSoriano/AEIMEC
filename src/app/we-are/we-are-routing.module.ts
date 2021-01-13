import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeAreComponent } from './we-are.component';

const routes: Routes = [{ path: '', component: WeAreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeAreRoutingModule { }
