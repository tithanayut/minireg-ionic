import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MultipleCourses } from '../models/course.model';
import { CourseProviderService } from '../providers/course-provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  courses$?: Observable<MultipleCourses>;

  constructor(private courseProvider: CourseProviderService) {
    this.courses$ = this.courseProvider.getAllCourses();
  }
}
