import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/course';
@Pipe({
  name: 'coursefilter'
})
export class CoursePipe implements PipeTransform {
  transform(courses: Course[], searchText: string): Course[] {
    if (!searchText) {
      return null;
    } else {
      courses.filter(course => {
        return course.name.toLowerCase() === searchText.toLowerCase();
      });
    }
  }
}
