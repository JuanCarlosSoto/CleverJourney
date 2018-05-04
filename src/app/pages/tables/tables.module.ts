import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FilteringComponent } from './filtering/filtering.component';
import { TablesService } from './tables.service';

export const routes = [
  { path: '', redirectTo: 'filtering', pathMatch: 'full'},
  { path: 'filtering', component: FilteringComponent, data: { breadcrumb: 'Filtering table' } },  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    FilteringComponent
  ],
  providers: [
    TablesService
  ]
})
export class TablesModule { }
