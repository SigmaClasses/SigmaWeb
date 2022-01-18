

export interface IStudent{

    sName?: string,
    sDOB?:Date,
    sImagePath?:string,
    sSchoolName?:string,
    sClass?:string
    sCourses?:string[],
    sSubjects?:string[],
    sFatherName?:string,
    sMotherName?:string,
    sReligion?:string,
    isAPST?:boolean,
    sPresentAddress?:string,
    sPresentPinCode?:number,
    sPermanentAddress?:string,
    sPermanentPinCode?:number,
    sEmail?:string,
    sContactNumber?:number,
    sParentOccupation?:string,
    sParentContactNumber?:string,
    sParentEmail?:string,
    sExaminationPercentage?:[{key:string, value:string}],
    sPreferableTime?:string,
    sDOJ?:Date
   

}