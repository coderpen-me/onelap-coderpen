import { Component,OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
    providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class RatingsComponent implements OnInit {

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }
   ngOnInit() {
  }

}
