import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  formData!: FormGroup // Permite crear los parametros para los formularios

  constructor(
    private employeeService: EmployeeService,
    private router: Router

  ) {
    this.formData = new FormGroup({
      name: new FormControl( '', [ Validators.required] ),
      lastname: new FormControl( '', [ Validators.required] ),
      lastname2: new FormControl( '' ),
      department: new FormControl( '', [ Validators.required] ),
      
    });
  }
  onSubmit(){
    const inputData = this.formData.value

    if( this.formData.valid) {console.log( inputData);

      this.employeeService.addEmployee( inputData ).subscribe({
        next: (data) => {
          console.log( data );
          console.log( 'empleado registrado exitosamente');

          // this.router.navigate([ ]) redireccionar a dashboard o donde esten todos los usuarios
        },
        error: ( errors ) => {
          console.log(errors )
        },
        complete: () => {
          this.formData.reset();
        }
      });
    }
  }
}
