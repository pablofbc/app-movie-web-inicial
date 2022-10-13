import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-movies';

  handleRating(rate: number) {
    alert(`The user selected ${rate}`);
  }

}
