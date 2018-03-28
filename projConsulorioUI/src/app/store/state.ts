import {
    DoctorModel,
    PatientModel,
  }  from '../models';

export interface State {
    doctors: Array<DoctorModel>
    patients: Array<PatientModel>
  }

export const defaultState = {
    doctors: [],
    patients: [],
  }
