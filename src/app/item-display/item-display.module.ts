import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDisplayRoutingModule } from './item-display-routing.module';
import { ItemDisplayComponent } from './item-display/item-display.component';


@NgModule({
  declarations: [ItemDisplayComponent],
  imports: [
    CommonModule,
    ItemDisplayRoutingModule
  ]
})
export class ItemDisplayModule { }
