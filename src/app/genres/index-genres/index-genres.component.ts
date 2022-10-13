import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.scss']
})
export class IndexGenresComponent implements OnInit {

  constructor(private _genresService: GenresService) { }

  ngOnInit(): void {
    this._genresService.getAll().subscribe(genres => {
      console.log(genres);

    })
  }

}
