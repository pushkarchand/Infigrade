import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  listOfCourses: Course[];
  searchName: string;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.searchName = '';
    this.enumerateCourses();
  }

  private enumerateCourses(): void {
    this.courseService.enumerateCourses()
      .subscribe(couseResponse => {
        this.listOfCourses = couseResponse.courses;
        console.log(this.listOfCourses);
      });
  }// private enumerateCourses(): void

}
