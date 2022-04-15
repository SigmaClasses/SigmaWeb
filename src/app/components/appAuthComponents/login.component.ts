import { Component  } from '@angular/core';  

//  import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
//  import { formControlConfig} from '../../shared/appConstants/shared.constants'
import {Router} from  '@angular/router'; 
import { LoginService } from 'src/app/services/login.service';
@Component({

    selector: 'login-page',
    templateUrl: './login.component.html'
})


export class LoginComponent  {

    constructor(private _router:Router,
        private _loginService:LoginService ){  }

    errorMessage:string ="";

    GetIn(userName:string,userPassword: string){
        // call api to get the user login data
        this.errorMessage = "";
        if(userName === "")
            this.errorMessage="Please Enter User Name."
        
         else
            if(userPassword === "")
                this.errorMessage=this.errorMessage + " " + "Please Enter Password."

            else
            {
                // all successful
                alert("Getting details from DataBase");
                
                // calling service to get the data
                this._loginService.checkCredentials(userName,userPassword);
                this._router.navigateByUrl('/Home'); 
            }
    }

    RegisterMe():void{

        alert('Under Construction');
    }

}