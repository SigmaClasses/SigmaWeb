import { Injectable } from "@angular/core";
import { ApplicationFormQuestions } from "src/app/shared/appClass/applicationFormQuestions.class";

import { nameof } from 'ts-simple-nameof'
import {IStudent} from '../../app/models/student.model' 
import { formControlConfig, formHeaderConfig} from '../shared/appConstants/shared.constants'

@Injectable()

export class QuestionBaseService {

    i :number = 1;
    getFormQuestions(){

        const allQuestions : ApplicationFormQuestions[] = [

            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sCourses),
                labelName:formHeaderConfig.header_sSubjectAndCourse, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++ 

            }),
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sSubjects),
                labelName:formHeaderConfig.header_sSubjectAndCourse, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }),
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sName),
                labelName:formHeaderConfig.header_studentName, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                isRequired:true,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sDOB),
                labelName:formHeaderConfig.header_dob, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Calender,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sFatherName),
                labelName:formHeaderConfig.header_fatherName, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sMotherName),
                labelName:formHeaderConfig.header_motherName, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sReligion),
                labelName:formHeaderConfig.header_Religion, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.isAPST),
                labelName:formHeaderConfig.header_isAPST, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Radio,
                validations: [],
                displayOrder: this.i++  
            }),
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sPresentAddress),
                labelName:formHeaderConfig.header_presentAddress, 
                controlName: formControlConfig.controlTextArea,
                controlType: '',
                validations: [],
                displayOrder: this.i++  
            })  ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sPresentPinCode),
                labelName:formHeaderConfig.header_presentAddress, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sPermanentAddress),
                labelName:formHeaderConfig.header_permanentAddress, 
                controlName: formControlConfig.controlTextArea,
                controlType: '',
                validations: [],
                displayOrder: this.i++  
            })  ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sPermanentPinCode),
                labelName:formHeaderConfig.header_permanentAddress, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sEmail),
                labelName:formHeaderConfig.header_email, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sContactNumber),
                labelName:formHeaderConfig.header_studentContactNumber, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sParentOccupation),
                labelName:formHeaderConfig.header_parentsDetails, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sParentContactNumber),
                labelName:formHeaderConfig.header_parentsDetails, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sParentEmail),
                labelName:formHeaderConfig.header_parentsDetails, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            }) ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sExaminationPercentage),
                labelName:formHeaderConfig.header_examinationPercentage, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            })  ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sPreferableTime),
                labelName:formHeaderConfig.header_preferableTime, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Text,
                validations: [],
                displayOrder: this.i++  
            })  ,
            new ApplicationFormQuestions({
                key: nameof<IStudent>(s=> s.sDOJ),
                labelName:formHeaderConfig.header_doj, 
                controlName: formControlConfig.controlTextBox,
                controlType: formControlConfig.controlType_Calender,
                validations: [],
                displayOrder: this.i++  
            }) 
        ]


        return allQuestions;

    }
}



