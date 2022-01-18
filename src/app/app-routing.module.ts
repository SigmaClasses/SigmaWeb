import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import {routeConfig} from  './shared/appConstants/route.constant';
import { PageNotFoundComponent } from '../app/components/layoutComponents/pageNotFound.component';

// const routes: Routes = [

//   {path:'', component:HomeComponent},
//   {path:'Home', component:HomeComponent},
//   {path:'Results', component:ResultsComponent}
// ]
// console.log(routes)

const routes: Routes = GetRoute(); 

// console.log(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


function GetRoute(): Routes {
  const _route : Routes = [];
  

  // pushing default value
  _route.push({path:'', component: routeConfig.find((i)=>i.routeLink==='Home')?.routeComponent , pathMatch: 'full'})
 
  routeConfig.map(_item=>
    _route.push({path: _item.routeLink, component: _item.routeComponent}) 
    )
 
    _route.push({path:'**', component:PageNotFoundComponent})
    
 return _route;
}

