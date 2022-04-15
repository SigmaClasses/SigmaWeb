import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class UtilService {

    constructor(){}


    /**
     * Method is expect the string parameter to check if that is not null/undefined or empty.
     * @param _value : pass string value
     * @returns boolean : true or false
     */
    stringNotNullOrEmpty(_value:string): boolean{

        let stringNotNullOrEmpty = false;

        switch(_value){

            case null: case undefined : case "":
                stringNotNullOrEmpty = true;
                break;

            case (_value.trim()):
                if(_value.trim() === "")   stringNotNullOrEmpty = true;
                else stringNotNullOrEmpty = false;
                break;

            default:
                stringNotNullOrEmpty = false;
                break; 
        }
        return stringNotNullOrEmpty;
    }


    
}