import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DrupalComponent } from './drupal/drupal.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, DrupalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
