export interface PatientModel {
  id : string;
  name : string;
  address  ? : string;
  age  ? : number;
  history  ? : string;
  doctorId  ? : string;
}
