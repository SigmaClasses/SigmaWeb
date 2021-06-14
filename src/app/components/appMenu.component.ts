import { Component, OnInit} from '@angular/core';
import {routeConfig} from '../../assets/appConstants/routeConstant';

@Component({

    selector:'app-menu',
    templateUrl:'./appMenu.component.html'
})

export class AppMenuComponent implements OnInit {

    routeConfigData : any = [];

ngOnInit(){
this.routeConfigData = routeConfig;

}
}