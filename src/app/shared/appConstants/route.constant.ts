 
import { HomeComponent } from '../../components/layoutComponents/home.Component'; 
import { AdmissionComponent } from '../../components/appComponents/admission.component';
import { ManagementComponent } from '../../components/appComponents/management.component';
import { ResultsComponent } from '../../components/appComponents/results.component';
import { LoginComponent } from 'src/app/components/appAuthComponents/login.component';

import { AdminHomeComponent } from 'src/app/components/admin/adminHome.component';
import { ManageCoursesComponent } from '../../components/admin/ManageCourses.component';
import { ManageFacultyComponent } from 'src/app/components/admin/ManageFaculty.component';
import { ManageResultComponent } from 'src/app/components/admin/manageResult.component';
import { ManageStudentComponent } from 'src/app/components/admin/ManageStudent.component';


import { GlobalConst } from './globalConstants';
// Define the value of showIn  as  'menu', 'none'..... to identify where we have to show the link

 
/**
 * Import this const object to get the route details. 
 * showIn: use this filter to get the specific required routes, possible values: 'menu', 'none'
 */
export const routeConfig =[

     
    { 
        routeLink: 'Home',
        routeLinkText:'Home',
        routeComponent: HomeComponent,
        showIn:  GlobalConst.appMenuShowIn_menu
    },

    { 
        routeLink: 'Admission',
        routeLinkText:'Admission',
        routeComponent: AdmissionComponent,
        showIn: GlobalConst.appMenuShowIn_menu
    },

    { 
        routeLink: 'Results',
        routeLinkText:'Results',
        routeComponent:ResultsComponent,
        showIn: GlobalConst.appMenuShowIn_menu
    },

    { 
        routeLink: 'Management',
        routeLinkText:'Management',
        routeComponent:ManagementComponent,
        showIn: GlobalConst.appMenuShowIn_menu
    },
    
    { 
        routeLink: 'Login',
        routeLinkText:'Login',
        routeComponent:LoginComponent,
        showIn:  GlobalConst.appMenuShowIn_login
    },
    { 
        routeLink: 'Admin',
        routeLinkText:'Admin',
        routeComponent:AdminHomeComponent,
        showIn:  GlobalConst.appMenuShowIn_adminMenu
    },
    { 
        routeLink: 'ManageStudent',
        routeLinkText:'Manage Student',
        routeComponent:ManageStudentComponent,
        showIn:  GlobalConst.appMenuShowIn_adminChild
    },
    { 
        routeLink: 'ManageFaculty',
        routeLinkText:'Manage Faculty',
        routeComponent:ManageFacultyComponent,
        showIn:GlobalConst.appMenuShowIn_adminChild
    },
    { 
        routeLink: 'ManageCourses',
        routeLinkText:'Manage Courses',
        routeComponent: ManageCoursesComponent,
        showIn: GlobalConst.appMenuShowIn_adminChild
    },
    { 
        routeLink: 'ManageResult',
        routeLinkText:'Manage Result',
        routeComponent:ManageResultComponent,
        showIn: GlobalConst.appMenuShowIn_adminChild
    }






       

]