import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  imports: [CommonModule],
  styleUrl: './employee-list.component.css'
  
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
    console.log(this.employees)
  }


  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data.data;
      console.log(data)
    });
  }

  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }

  editEmployee(id: string): void {
    this.router.navigate(['/employees/edit', id]);
  }
}
