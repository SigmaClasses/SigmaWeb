 
import { HomeComponent } from '../../app/components/layoutComponents/home.Component'; 
import { AdmissionComponent } from '../../app/components/appComponents/admission.component';
import { ManagementComponent } from '../../app/components/appComponents/management.component';
import { ResultsComponent } from '../../app/components/appComponents/results.component';

export const routeConfig =[

     
    { 
        routeLink: 'Home',
        routeLinkText:'Home',
        routeComponent: HomeComponent
    },

    { 
        routeLink: 'Admission',
        routeLinkText:'Admission',
        routeComponent: AdmissionComponent
    },

    { 
        routeLink: 'Results',
        routeLinkText:'Results',
        routeComponent:ResultsComponent
    },

    { 
        routeLink: 'Management',
        routeLinkText:'Management',
        routeComponent:ManagementComponent
    } 
]