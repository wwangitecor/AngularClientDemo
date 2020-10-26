import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ItemDisplayRoutingModule } from './item-display-routing.module';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ItemService } from './services/item.service';


@NgModule({
  declarations: [
    ItemDisplayComponent
  ],
  imports: [
    CommonModule,
    ItemDisplayRoutingModule,
    MatTableModule
  ],
  providers: [
    ItemService
  ]
})
export class ItemDisplayModule { }
