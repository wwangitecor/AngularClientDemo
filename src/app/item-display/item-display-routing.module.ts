import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemDisplayComponent } from './item-display/item-display.component';

const routes: Routes = [
  { path: 'display', component: ItemDisplayComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemDisplayRoutingModule { }
