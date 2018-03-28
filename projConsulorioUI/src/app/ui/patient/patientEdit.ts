import {
    Component, Output, Input, EventEmitter, OnInit
} from '@angular/core'

import {
    PatientModel
} from '../../models';

@Component({
    selector: '[patient-edit-ui]',
    template: `
        <button class="btn btn-default" data-toggle="modal" [attr.data-target]="'#modelEdit-' + patient.id">Edit</button>
        
        <!-- Modal -->
        <div class="modal fade" [id]="'modelEdit-' + patient.id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Edit Patient</h4>
                    </div>
                    <div class="modal-body">
                        <form>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">id</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
 
                                    disabled [ngModel]="patient.id" name="id"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">name</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editPatient.name" name="name"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">address</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editPatient.address" name="address"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">age</label>
                                <div class="col-sm-10">
                                    <input type="number"
 class="form-control" 
                                    [(ngModel)]="editPatient.age" name="age"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">history</label>
                                <div class="col-sm-10">
                                    <textarea name="history" [(ngModel)]="editPatient.history" rows="10" cols="55"></textarea>
                                </div>
                            </div>
 

                        </form> 
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" (click)="onSave()" data-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>       
    `
})
export class PatientEdit  implements OnInit {
    @Input() patient: PatientModel;

    @Output() onEditHandler = new EventEmitter();

    editPatient: PatientModel;

    ngOnInit() {
      // clone the user object
      this.editPatient = {
        id: '',
        name: this.patient.name
,
        address: this.patient.address
,
        age: this.patient.age
,
        history: this.patient.history
,
        doctorId: this.patient.doctorId
      };
    }

    onSave() {
        this.onEditHandler.next({id: this.patient.id, patient : this.editPatient});
    }
}
