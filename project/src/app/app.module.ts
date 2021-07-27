import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataypesComponent } from './dataypes/dataypes.component';
import { DirectiveComponent } from './directive/directive.component';
import { DepartComponent } from './depart/depart.component';

@NgModule({
  declarations: [
    AppComponent,
    DataypesComponent,
    DirectiveComponent,
    DepartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
