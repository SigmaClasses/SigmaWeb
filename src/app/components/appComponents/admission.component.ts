import { Component  } from '@angular/core'; 
  

 import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({

    selector: 'admission-page',
    templateUrl: './admission.component.html'
})


export class AdmissionComponent {

    constructor(private fb:FormBuilder){   
    }

    //  @ViewChild('formD')
    //  formD!:ElementRef;

    admissionForm = this.fb.group({

        sName: ['',Validators.required]
    });
      
    onFormSubmit(){
        
         alert('Submit')
      }

}







