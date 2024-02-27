import { Component } from '@angular/core';
import { cricketers } from './shared/const/players';
import { Iplayers } from './shared/model/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta magnam cum, molestias, labore alias facere corrupti ullam at accusantium excepturi eius quaerat debitis temporibus asperiores corporis nihil, placeat tenetur.
  `;

  searchedValue : string = ' ';

  
  players : Array<Iplayers> = cricketers;

  course = {
    title : "MEAN Stack",
    students : 12345,
    rating : 4.5,
    price : 199.99,
    releaseDate : new Date(2024,1,26)
  }

  filesArray = [
    {
      fileName : 'Form 16',
      type : 'pdf',
      size : 123477869
    },
    {
      fileName : 'Salary Slip',
      type : 'pdf',
      size : 123477
    },
    {
      fileName : 'Exp Letter',
      type : 'pdf',
      size : 123477869674
    },
  ]

}
