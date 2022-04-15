import { Component, OnInit  } from '@angular/core'; 
import {QuestionBaseService} from '../../services/questionBase.service';
import {ApplicationFormQuestions} from '../../shared/appClass/applicationFormQuestions.class'

 import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
 import { formControlConfig} from '../../shared/appConstants/shared.constants';

 import { LoginService } from 'src/app/services/login.service';

@Component({

    selector: 'admission-page',
    templateUrl: './admission.component.html',
    providers:[QuestionBaseService]
})


export class AdmissionComponent implements OnInit {

    questions: ApplicationFormQuestions[] = [];
    isOnline:boolean=true; //need to make it false 
    controlType:any= {};
    havingError=false;
    formPath="assets/files/form.pdf";
    constructor(private fb:FormBuilder, private _questionBaseService:QuestionBaseService,
        private _loginService:LoginService){    

        // assigning values to controlType such that we can use it in switch case
        this.controlType.TB = formControlConfig.controlTextBox;
        this.controlType.TB_T = formControlConfig.controlType_Text;
        this.controlType.TB_R = formControlConfig.controlType_Radio;
        this.controlType.TB_C = formControlConfig.controlType_Calender;
        this.controlType.TA = formControlConfig.controlTextArea;
        this.controlType.DD = formControlConfig.controlDropDown;
    }

    aForm = this.fb.group({});
    showEditButton=false;

    ngOnInit(): void {

        this.questions = this._questionBaseService.getFormQuestions();

        if(this.questions !== []){

            this.questions.forEach(_item=>{ 
                this.aForm.addControl(_item.key,  this.fb.control(''))
     
            });
            this.aForm.controls['sName'].setValidators(Validators.required);
        }


        if(this._loginService.getPrivileges() === "admin")
            this.showEditButton= true;

    }
    //  @ViewChild('formD')
    //  formD!:ElementRef;

 



      
    onFormSubmit(){
        
         alert('Submit')
      }

      downloadForm(){
          window.open(this.formPath);
      }


      

}







