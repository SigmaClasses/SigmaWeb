 
import { HomeComponent } from '../../components/layoutComponents/home.Component'; 
import { AdmissionComponent } from '../../components/appComponents/admission.component';
import { ManagementComponent } from '../../components/appComponents/management.component';
import { ResultsComponent } from '../../components/appComponents/results.component';

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