import { Injectable, EventEmitter , Output} from "@angular/core";

import { ILoginUserDetails } from "../models/loginUserDetails.model";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LoginService{


   // @Output() LoginUserDetails: EventEmitter<ILoginUserDetails>  = new EventEmitter();

     private LoginUserDetails: Subject<ILoginUserDetails>  = new Subject();
    constructor(){ 
        
    }


    checkCredentials(userName: string, userPassword:string):boolean{
 
        // posting checking the credentials with 200 status
        let _userDetails : ILoginUserDetails = {
            userName:'Sigma',userGender:'M'
        }; 

        this.setUserDetails(_userDetails);
        return true;
    }

    isUserAuthenticated():boolean{
        return true;
    }

    getPrivileges():string{
        return "admin";
    }


    private setUserDetails(_userDetails:ILoginUserDetails):void{
        this.LoginUserDetails.next(_userDetails);

    }

    getUserDetails():Observable<ILoginUserDetails>{
        return this.LoginUserDetails.asObservable();
    }

    doLogOutUser():void{
        console.log( this.LoginUserDetails)
        this.LoginUserDetails.next(undefined);
       // this.LoginUserDetails.next();
        console.log( this.LoginUserDetails)
    }
}