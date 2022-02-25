import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './fund/fund.component';

const routes: Routes = [{path:"", component: FundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
