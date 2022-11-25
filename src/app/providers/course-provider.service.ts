import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllCourses, Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseProviderService {
  private apiBaseUrl = 'https://api.minireg.thanayut.in.th';

  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get<AllCourses>(`${this.apiBaseUrl}/courses`, {
      headers: {
        'ngrok-skip-browser-warning': '^_^',
      },
    });
  }

  getCourseByCourseNo(courseNo: string) {
    return this.http.get<Course>(`${this.apiBaseUrl}/courses/${courseNo}`, {
      headers: {
        'ngrok-skip-browser-warning': '^_^',
      },
    });
  }
}
