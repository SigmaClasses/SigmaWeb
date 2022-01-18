import { Component, OnInit  } from '@angular/core'; 
import {QuestionBaseService} from '../../services/questionBase.service';
import {ApplicationFormQuestions} from '../../shared/appClass/applicationFormQuestions.class'

 import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({

    selector: 'admission-page',
    templateUrl: './admission.component.html',
    providers:[QuestionBaseService]
})


export class AdmissionComponent implements OnInit {

    questions: ApplicationFormQuestions[] = [];
    isOnline:boolean=false;
    formPath="assets/files/form.pdf";
    constructor(private fb:FormBuilder, private _questionBaseService:QuestionBaseService){    
    }

    aForm = this.fb.group({});


    ngOnInit(): void {

        this.questions = this._questionBaseService.getFormQuestions();

        if(this.questions !== []){

            this.questions.forEach(_item=>{ 
                this.aForm.addControl(_item.key,  this.fb.control(''))
     
            });
            this.aForm.controls['sName'].setValidators(Validators.required);
        }

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







