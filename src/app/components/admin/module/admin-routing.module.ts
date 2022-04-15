// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';  
// import { routeConfig } from 'src/app/shared/appConstants/route.constant';
// import { PageNotFoundComponent } from '../../layoutComponents/pageNotFound.component';

// // service
// import { AuthenticationService } from 'src/app/services/authentication.service';
 
 

// const routes: Routes = GetRoute(); 

 

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AdminRoutingModule { }


// function GetRoute(): Routes {
//   const _route : Routes = [];

  
//    // pushing default value
// //    _route.push({path:'', component: routeConfig.find((i)=>i.routeLink==='Home')?.routeComponent , pathMatch: 'full'})
 
   
//   routeConfig.map(_item=>
//     {
//       // for admin routes keeping login mechanism
//       if(_item.showIn === "adminChild"){
//       _route.push({path: _item.routeLink, component: _item.routeComponent, canActivate: [AuthenticationService]}) 
//       } 
//   })
 
//     _route.push({path:'**', component:PageNotFoundComponent})
    
//  return _route;
// }

