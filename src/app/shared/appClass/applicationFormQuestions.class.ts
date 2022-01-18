


export class ApplicationFormQuestions{

    // declaring the variables
    value: any;
    key: string;
    labelName: string;
    controlName: string;
    controlType: string;
    isRequired:boolean;
    validations: string[];
    displayOrder:number;
    dropDownOptions: {key: string, values: string}[];



    // initializing the values in the constructor
    // defining all the values as parameter such that once we create the new instance we should be able 
    // to pass the data
    constructor(options: {
        value?: any;
    key?: string;
    labelName?: string;
    controlName?: string;
    controlType?: string;
    isRequired?:boolean;
    validations?: string[];
    displayOrder?:number;
    dropDownOptions?: {key: string, values: string}[];
    }= {}) {

        this.value =    options.value;
        this.key = options.key || '';
        this.labelName = options.labelName || '';
        this.controlName = options.controlName || '';
        this.controlType = options.controlType || '';
        this.isRequired = options.isRequired || false;
        this.validations =options.validations || [];
        this.displayOrder = options.displayOrder === undefined ? 1 : options.displayOrder ;
        this.dropDownOptions = options.dropDownOptions || [];

    }
}




// export const applicationFormConfig =[

     
//     {  
//         key:  nameof<IStudent>(s=>s.sName),
//         labelName: appLabelsConfig.name,
//         controlName: sharedConfig.controlTextBox,
//         controlType:  sharedConfig.controlType_Text,
//         Validations: "Required"
        
//     },

//     { 
//         routeLink: 'Admission',
//         routeLinkText:'Admission',
         
//     },

//     { 
//         routeLink: 'Results',
//         routeLinkText:'Results',
        
//     },

//     { 
//         routeLink: 'Management',
//         routeLinkText:'Management',
         
//     } 
// ]