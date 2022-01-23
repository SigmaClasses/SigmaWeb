import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// External Modules
 
import { SlickCarouselModule } from 'ngx-slick-carousel'; 

 
// Import all the components here 
import  {AppHeaderComponent} from './components/layoutComponents/appHeader.component';
import  {AppFooterComponent} from './components/layoutComponents/appFooter.component';
import  {AppMenuComponent} from './components/layoutComponents/appMenu.component';
import {HomeComponent} from './components/layoutComponents/home.Component';
import {ImageSliderComponent} from './components/imageSlider/imageSlider.component';
import { AdmissionComponent } from './components/appComponents/admission.component';
import { ManagementComponent } from './components/appComponents/management.component';
import { ResultsComponent } from './components/appComponents/results.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

 

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent, AppFooterComponent, AppMenuComponent,
    HomeComponent, ImageSliderComponent,AdmissionComponent ,ManagementComponent, ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SlickCarouselModule, ReactiveFormsModule, NoopAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
