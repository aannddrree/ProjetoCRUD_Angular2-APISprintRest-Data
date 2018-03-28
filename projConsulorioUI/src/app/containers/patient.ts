import { Component } from '@angular/core';
import {
  PatientModel
} from '../models';

import {
  PatientService
} from '../services';

import { Store } from '../store';
import 'rxjs/Rx';

@Component({
  selector: 'patients-container',
  template: `
    <div>
        <h1>Patients</h1>                    
            <patient-create-ui 
              
                (onSaveHandler)="onCreatePatient($event)" >
            </patient-create-ui>
    </div>
    <table class="table">
        <thead>
            <tr>
              <th>
                id        
              </th>            
              <th>
                name        
              </th>            
              <th>
                address        
              </th>            
              <th>
                age        
              </th>            
              <th>
                history        
              </th>            
              <th>
                Doctors name        
              </th>            
              <th>
                Edit
              </th>
              <th>
                Delete
              </th>
            </tr>
        </thead>
       
        <tbody>
            <tr patient-ui 
                *ngFor="let patient of patients" 
                [patient]="patient" 
                
                (onEditHandler)="onEditPatient($event)"
                (onDeleteHandler)="onDeletePatient($event)"
            >
            </tr>
        </tbody>
        </table> 
        
    `
})
export class PatientContainer {
  patients: PatientModel[] = [];

  constructor(
    private store: Store,
    private patientService: PatientService) {


    this.patientService.getPatients().subscribe();


    this.store.changes.pluck('patients').subscribe((patients: any) => this.patients = patients );
  }

  onCreatePatient(patient: PatientModel) {
    this.patientService.createPatient(patient).subscribe();
  }

  onEditPatient(payload) {
    this.patientService.editPatient(payload.id, payload.patient).subscribe();
  }

  onDeletePatient(id: string) {
    this.patientService.deletePatient(id).subscribe();
  }

}
