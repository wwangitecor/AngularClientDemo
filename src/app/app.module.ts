import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemDisplayModule } from './item-display/item-display.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ItemDisplayModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
