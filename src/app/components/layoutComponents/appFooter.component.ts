import { Component } from '@angular/core';
declare function BodyScrollToTop(): any; //function will scroll to top


@Component({

    selector: 'app-footer',
    templateUrl: './appFooter.component.html'
})


export class AppFooterComponent {

    // appLogo = "assets/images/appImages/logo.jpg";
    appLogoWithText = "assets/images/appImages/logoWithText.png";

    currentYear = (new Date()).getFullYear()

}







