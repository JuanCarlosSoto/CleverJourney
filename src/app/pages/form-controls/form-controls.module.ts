import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';

export const routes = [
  { path: '', redirectTo: 'autocomplete', pathMatch: 'full'},
  { path: 'form-field', component: FormFieldComponent, data: { breadcrumb: 'Form Field' } },
  { path: 'input/:id', component: InputComponent, data: { breadcrumb: 'Input' } }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule
  ],
  declarations: [
    FormFieldComponent, 
    InputComponent
  ]
})
export class FormControlsModule { }