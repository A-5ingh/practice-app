import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-angular-world';
  viewMode = 'map';
  post = {
    title: 'Title',
    isFavorite: true,
  };

  onFavoriteChanged(eventArgs): void {
    console.log('Favorite changed!', eventArgs)
  }
}
