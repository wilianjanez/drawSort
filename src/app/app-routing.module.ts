import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawSortComponent } from './views/draw-sort/draw-sort.component';

const routes: Routes = [
  {
    path: '',
    component: DrawSortComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
