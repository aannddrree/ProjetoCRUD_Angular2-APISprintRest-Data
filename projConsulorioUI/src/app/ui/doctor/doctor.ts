import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import {
  
  DoctorModel
} from '../../models';

@Component({
    selector: '[doctor-ui]',
    template: `
        <td>{{doctor.id}}</td>
        <td>{{doctor.name}}</td>
        <td>{{doctor.address}}</td>
        <td>{{doctor.available}}</td>
        
        
        <td doctor-edit-ui 
                [doctor]="doctor" 
                (onEditHandler)="onEditDoctor($event)">
        </td>
        <td doctor-delete-ui 
            [doctor]="doctor"
            (onDeleteHandler)="onDeleteDoctor($event)">
        </td>
    `
})
export class Doctor {
    @Input() doctor: DoctorModel;

    @Output() onEditHandler = new EventEmitter();
    @Output() onDeleteHandler = new EventEmitter();

    onEditDoctor(data) {
        this.onEditHandler.next(data);
    }

    onDeleteDoctor() {
        this.onDeleteHandler.next(this.doctor.id);
    }
}
