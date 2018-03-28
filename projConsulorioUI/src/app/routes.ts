import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'
import {
    DoctorContainer,
    PatientContainer,
    
    DashboardContainer,
    HomeContainer
} from './containers';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: DashboardContainer,
    children: [
        { path: 'doctors', component: DoctorContainer },{ path: 'patients', component: PatientContainer },
        { path: '', component: HomeContainer }
    ]
  },
  { path: '**', redirectTo: '' }
]);
