import {Injectable} from "@angular/core";
import {Router, CanActivate} from  '@angular/router';

@Injectable({
    providedIn:'root'
})

export class AuthenticationService implements CanActivate {

    constructor(private _router:Router){  }

    canActivate() : boolean{ 
        if(this.getToken()) {
            return true;
        }
        else
        {
            
            this._router.navigateByUrl('/Login');
            return false;
        }
       
        
    }

    private getToken() {
        // call api to get the token details
        return true;
        //return false;
    }

     

}
