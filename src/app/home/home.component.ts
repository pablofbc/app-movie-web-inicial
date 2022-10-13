import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-man',
      releaseDate: new Date(),
      price: 1400.99,
      poster: 'https://www.latercera.com/resizer/GpLhibb3SbWUfmMji_5M8L-QgbY=/arc-anglerfish-arc2-prod-copesa/public/5ZBBBDHNIBGTNB3GQTSQT5W77I.jpg'
    },
    {
      title: 'Moana',
      releaseDate: new Date('2016-11-14'),
      price: 300.99,
      poster: 'https://i.pinimg.com/736x/9c/5c/08/9c5c08e524e2be02705f27bbb23a4222.jpg'
    }];

    this.moviesFutureReleases = [{
      title: 'Avenges',
      releaseDate: new Date(),
      price: 456.99,
      poster: ''
    },
    {
      title: 'Toy Story',
      releaseDate: new Date('2010-11-14'),
      price: 789.99,
      poster: ''
    }];
  }

  moviesInTheaters: any;
  moviesFutureReleases: any;

}
