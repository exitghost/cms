import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudent(studentNumber: string) {
    return this.http.get<Student>(`${environment.apiUrl}/students/${studentNumber}`);
  }

  getStudents() {
    return this.http.get<Student[]>(`${environment.apiUrl}/students`);
  }

  getStudentByAccountId(accountId: number) {
    return this.http.get<Student>(`${environment.apiUrl}/students/account/${accountId}`);
  }

  createStudentWithAccount(student: Student) {
    return this.http.post<Student>(environment.apiUrl + '/students/account', student);
  }

  updateStudentWithAccount(studentNumber: string, student: Student) {
    return this.http.patch(`${environment.apiUrl}/students/account/${studentNumber}`, student);
  }

  deleteStudent(studentNumber: string) {
    return this.http.delete(`${environment.apiUrl}/students/${studentNumber}`);
  }
}
