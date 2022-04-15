import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
// import { AdminRoutingModule } from './components/admin/module/admin-routing.module';


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
import { AdminHomeComponent } from './components/admin/adminHome.component';
import { LoginComponent } from './components/appAuthComponents/login.component';
import { ManageCoursesComponent } from './components/admin/ManageCourses.component'; 
import { ManageFacultyComponent } from './components/admin/ManageFaculty.component';
import { ManageResultComponent } from './components/admin/manageResult.component'; 
import { ManageStudentComponent } from './components/admin/ManageStudent.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent, AppFooterComponent, AppMenuComponent,
    HomeComponent, ImageSliderComponent,AdmissionComponent ,ManagementComponent, ResultsComponent,
    LoginComponent,
    AdminHomeComponent,
    ManageStudentComponent,ManageResultComponent,ManageFacultyComponent,ManageCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SlickCarouselModule, ReactiveFormsModule,
     RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
