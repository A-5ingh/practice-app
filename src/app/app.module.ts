import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.components';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseComponent, SummaryPipe, FavoriteComponent, PanelComponent],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
