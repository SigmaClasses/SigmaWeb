import { Component, OnInit} from '@angular/core';
import {routeConfig} from '../../shared/appConstants/route.constant';

// importing login service to activate the login mechanism
import { LoginService } from 'src/app/services/login.service';

@Component({

    selector:'app-menu',
    templateUrl:'./appMenu.component.html'
})

export class AppMenuComponent implements OnInit {

    constructor(private _loginService:LoginService){}

    readonly adminRouteLink = 'Admin';
    loadAdminMenu = false;

    routeConfigData : any = []; 
ngOnInit(){
    // routeConfig will get all the routes,
    // we have to filter it with which is applicable for 'menu' only
this.routeConfigData = routeConfig.filter(_r=> _r.showIn === 'menu' );
console.log("App menu", this.routeConfigData )

this._loginService.getUserDetails().subscribe(_data=>{ 
    console.log(_data)
    if(_data){  
       // console.log("again in getUserMenu")
    this.loadAdminMenu = true;  
    } 
    else
    this.loadAdminMenu = false;
})

}

 
}