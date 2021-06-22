import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import all the components here 
import  {AppHeaderComponent} from './components/appHeader.component';
import  {AppFooterComponent} from './components/appFooter.component';
import  {AppMenuComponent} from './components/appMenu.component';
import {HomeComponent} from './components/home.Component';
import {ImageSliderComponent} from './components/imageSlider/imageSlider.component';


// External Modules
 
import { SlickCarouselModule } from 'ngx-slick-carousel'; 
 

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent, AppFooterComponent, AppMenuComponent,
    HomeComponent, ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
