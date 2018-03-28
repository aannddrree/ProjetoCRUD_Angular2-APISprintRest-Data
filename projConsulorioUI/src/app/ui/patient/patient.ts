import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import {
  
  PatientModel
} from '../../models';

@Component({
    selector: '[patient-ui]',
    template: `
        <td>{{patient.id}}</td>
        <td>{{patient.name}}</td>
        <td>{{patient.address}}</td>
        <td>{{patient.age}}</td>
        <td>{{patient.history}}</td>
        
        
        <td patient-edit-ui 
                [patient]="patient" 
 
                (onEditHandler)="onEditPatient($event)">
        </td>
        <td patient-delete-ui 
            [patient]="patient"
            (onDeleteHandler)="onDeletePatient($event)">
        </td>
    `
})
export class Patient {
    @Input() patient: PatientModel;

    @Output() onEditHandler = new EventEmitter();
    @Output() onDeleteHandler = new EventEmitter();

    onEditPatient(data) {
        this.onEditHandler.next(data);
    }

    onDeletePatient() {
        this.onDeleteHandler.next(this.patient.id);
    }
}
