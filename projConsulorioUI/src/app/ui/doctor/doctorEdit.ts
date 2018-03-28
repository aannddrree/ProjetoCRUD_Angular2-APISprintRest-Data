import {
    Component, Output, Input, EventEmitter, OnInit
} from '@angular/core'

import {
    DoctorModel
} from '../../models';

@Component({
    selector: '[doctor-edit-ui]',
    template: `
        <button class="btn btn-default" data-toggle="modal" [attr.data-target]="'#modelEdit-' + doctor.id">Edit</button>
        
        <!-- Modal -->
        <div class="modal fade" [id]="'modelEdit-' + doctor.id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Edit Doctor</h4>
                    </div>
                    <div class="modal-body">
                        <form>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">id</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
 
                                    disabled [ngModel]="doctor.id" name="id"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">name</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editDoctor.name" name="name"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">address</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editDoctor.address" name="address"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">available</label>
                                <div class="col-sm-10">
                                    <input type="checkbox"
 class="form-control" 
                                    [(ngModel)]="editDoctor.available" name="available"/>
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
export class DoctorEdit  implements OnInit {
    @Input() doctor: DoctorModel;

    @Output() onEditHandler = new EventEmitter();

    editDoctor: DoctorModel;

    ngOnInit() {
      // clone the user object
      this.editDoctor = {
        id: '',
        name: this.doctor.name
,
        address: this.doctor.address
,
        available: this.doctor.available
      };
    }

    onSave() {
        this.onEditHandler.next({id: this.doctor.id, doctor : this.editDoctor});
    }
}
