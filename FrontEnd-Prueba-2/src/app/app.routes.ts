import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';

export const routes: Routes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/new', component: EmployeeFormComponent },
    { path: 'employees/edit/:id', component: EmployeeFormComponent },
    { path: 'departments', component: DepartmentListComponent },
    { path: 'departments/new', component: DepartmentFormComponent },
    { path: 'departments/edit/:id', component: DepartmentFormComponent },
    { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

// hace que las rutas esten disponibles en toda la app
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }