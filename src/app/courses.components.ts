import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: ` {{ text | summary: 15 }} `,
})
export class CoursesComponent {
  text = `Dolor adipisicing est voluptate consectetur. Excepteur occaecat incididunt officia esse quis do aliquip minim tempor sint voluptate. Cupidatat amet excepteur ex officia sit nisi enim proident ipsum. Laboris officia culpa minim excepteur eiusmod excepteur qui non culpa officia adipisicing id irure nostrud. Irure deserunt incididunt aliqua commodo sunt ad ex fugiat commodo. Occaecat reprehenderit ullamco magna deserunt eu laborum proident exercitation sit non excepteur nisi labore. Dolor amet mollit dolor esse aliquip pariatur aute mollit est magna non exercitation.`;
}
