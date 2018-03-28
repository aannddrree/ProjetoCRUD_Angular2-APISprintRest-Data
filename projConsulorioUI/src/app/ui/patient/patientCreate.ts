import {
    Component, Output, Input, EventEmitter
} from '@angular/core';

import {
  PatientModel
} from '../../models';

@Component({
    selector: 'patient-create-ui',
    template: `
        <div>
            <div *ngIf="!addNew"><button class="btn btn-primary" (click)="onAddNew()">Add New Patient</button></div>
            <form *ngIf="addNew">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">name</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="patient.name" name="name"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">address</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="patient.address" name="address"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">age</label>
                  <div class="col-sm-10">
                      <input type="number"
              class="form-control" [(ngModel)]="patient.age" name="age"/>
                  </div>
                </div>
                
                <div class="form-group row">
                <label class="col-sm-2 col-form-label">Doctor</label>
                <div class="col-sm-10">
                <select class="form-control">
                  <option>Teste</option>
                </select>
                </div>
              </div>


                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">history</label>
                  <div class="col-sm-10">
                    <textarea name="history" [(ngModel)]="patient.history" rows="10" cols="80"></textarea>
                  </div>
                </div>
                
            
                           
                <button class="btn btn-success" (click)="onSave()">Save</button>
                <button class="btn btn-default" (click)="onCancel()">Cancel</button>                
            </form>
       </div>
       <hr />       
    `
})
export class PatientCreate {
    @Output() onSaveHandler = new EventEmitter();

    patient: PatientModel = {
      id: '',
      name: ''
    };

    addNew: boolean = false;

    onAddNew() {
      this.addNew = true;
    }

    onCancel() {
      this.addNew = false;
      this.reset();
    }

    onSave() {
      this.addNew = false;
      this.onSaveHandler.next(this.patient);
      this.reset();
    }

    reset() {
      this.patient = {
        id: '',
        name: ''
      };
    }
}
