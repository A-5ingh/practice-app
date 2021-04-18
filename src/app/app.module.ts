import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { InputFormatDirective } from './directive/input-format.directive';

import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseComponent, SummaryPipe, FavoriteComponent, PanelComponent, InputFormatDirective],
  imports: [BrowserModule, FormsModule, FontAwesomeModule, MatSelectModule, MatFormFieldModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
