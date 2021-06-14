import {Component} from '@angular/core';

 

@Component({

    selector: 'app-footer',
    templateUrl: './appFooter.component.html'
})


export class AppFooterComponent {

    // appLogo = "assets/images/appImages/logo.jpg";
    appLogoWithText = "assets/images/appImages/logoWithText.png";

    currentYear = (new Date()).getFullYear()

}







