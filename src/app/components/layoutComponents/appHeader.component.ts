import {Component, OnInit} from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { ILoginUserDetails } from 'src/app/models/loginUserDetails.model';
import { Router } from '@angular/router';

@Component({

    selector: 'app-header',
    templateUrl: './appHeader.component.html'
 
})


export class AppHeaderComponent implements OnInit {

    loginUserDetails:ILoginUserDetails= {userName:'',userGender:''};
    constructor(private _loginService:LoginService, private _router:Router){}

    showLogoutButton:boolean = false;

    appLogo = "assets/images/appImages/logo.jpg";
    appLogoWithText = "assets/images/appImages/logoWithText.png";

    _date: Date = new Date();
    greetingMessage= "";

    ngOnInit(): void {
        
        this._loginService.getUserDetails().subscribe(_data=>{
            //console.log(_data);
            if(_data){ 
            this.showLogoutButton = true;
            this.loginUserDetails.userName = _data.userName;
            this.loginUserDetails.userGender = _data.userGender;
            }
            else
            this.showLogoutButton = false;
        })

        this.setGreetings(this._date.getHours());
          
        
    }

   private setGreetings(_hours:number) {

    console.log("hours", _hours);

    if(_hours >= 0 && _hours <=4) this.greetingMessage = "Greetings!";
        else
            if(_hours>4 && _hours <12)  this.greetingMessage = "Good Morning!";
                else
                    if(_hours>=12 && _hours <16)  this.greetingMessage = "Good Afternoon!";
                    else
                        if(_hours>=15 && _hours <=20)  this.greetingMessage = "Good Evening!";
                        else this.greetingMessage = "Greetings!";
    } 


    LogMeOut():void{

        if(confirm("Are you sure to Logout?"))
        {
            this._loginService.doLogOutUser();
            this._router.navigateByUrl("/Home");
        }
    }
}







