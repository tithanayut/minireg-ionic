import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MultipleCourses } from '../models/course.model';
import { CourseProviderService } from '../providers/course-provider.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage {
  minInput: number = 10;
  maxInput: number = 100;
  courses$?: Observable<MultipleCourses>;

  constructor(private courseProvider: CourseProviderService) {}

  search() {
    this.courses$ = this.courseProvider.getCourseByTotalSeats(
      this.minInput,
      this.maxInput
    );
  }
}
