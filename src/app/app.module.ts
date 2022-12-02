import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AddTutorialsComponent } from './add-tutorials/add-tutorials.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderNavComponent,
    DashboardComponent,
    TutorialsComponent,
    AddTutorialsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
