import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3001/api/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(API_URL);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  updateEmployee(id: string, data: any): Observable<any> {
    return this.http.patch(`${API_URL}/${id}`, data);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
