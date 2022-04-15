import { Component, NgModule, OnInit} from "@angular/core";

import { routeConfig } from "src/app/shared/appConstants/route.constant";
import { GlobalConst } from "src/app/shared/appConstants/globalConstants";

@Component({
selector:'adminHome-page',
templateUrl:'./adminHome.component.html'

})

export class AdminHomeComponent implements OnInit{
    
    constructor() {}
 
    routeConfigData : any = []; 

    ngOnInit(): void {
            // we have to filter it with which is applicable for 'admin' only
        this.routeConfigData = routeConfig.filter(_r=> _r.showIn === GlobalConst.appMenuShowIn_adminChild);

        console.log(this.routeConfigData )
    }

}