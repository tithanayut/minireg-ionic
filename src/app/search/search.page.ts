import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { CourseProviderService } from '../providers/course-provider.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  courseNoInput: string = '2110101';
  course$?: Observable<Course>;

  constructor(private courseProvider: CourseProviderService) {}

  search() {
    this.course$ = this.courseProvider.getCourseByCourseNo(this.courseNoInput);
  }
}
