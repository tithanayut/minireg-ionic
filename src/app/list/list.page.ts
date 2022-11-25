import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AllCourses } from '../models/course.model';
import { CourseProviderService } from '../providers/course-provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  courses$?: Observable<AllCourses>;

  constructor(private courseProvider: CourseProviderService) {
    this.courses$ = this.courseProvider.getAllCourses();
  }
}
