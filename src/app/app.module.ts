import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchHeaderComponent } from './search-header/search-header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBodyComponent } from './search-body/search-body.component';
import { SearchFooterComponent } from './search-footer/search-footer.component';
import { TopFooterComponent } from './top-footer/top-footer.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    SearchBarComponent,
    SearchBodyComponent,
    SearchFooterComponent,
    TopFooterComponent,
    BottomFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
