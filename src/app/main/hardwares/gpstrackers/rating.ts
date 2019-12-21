import {Component,OnInit} from '@angular/core';
import { Product } from '../../shared/product';

@Component({
  selector: 'ngbd-rating-decimal',
  templateUrl: './rating.html',
  styleUrls: ['./gpstrackers.component.css'],
})
export class NgbdRatingDecimal {
    products: Product[] = [
          {
            id: '0',
            name: 'Navtelecom SMART S-24 xx',
            image: 'assets/images/devices/device1.jpg',
            onelapScore: '60%',
            startRating: 4,
            recommended: 'Recommended',
            Discount : ''
          },
          {
            id: '1',
            name: 'Teltonika-FMB120 ',
            image: 'assets/images/devices/device2.jpg',
            onelapScore: '60%',
            startRating: 3.5,
            recommended: '',
            Discount : ''
          },
          {
            id: '2',
            name: 'Naasldkvansdv',
            image: 'assets/images/devices/device3.jpg',
            onelapScore: '60%',
            startRating: 4,
            recommended: '',
            Discount : ''
          },
          {
            id: '3',
            name: 'BCE-FMS500-ONE ',
            image: 'assets/images/devices/device4.jpg',
            onelapScore: '50%',
            startRating: 4,
            recommended: '',
            Discount : ''
          },
          {
            id: '4',
            name: 'Arnavi ',
            image: 'assets/images/devices/device5.png',
            onelapScore: '20%',
            startRating: 3.5,
            recommended: '',
            Discount : ''
          },
          {
            id: '5',
            name: 'Navtelecom-Signal-S-2551 ',
            image: 'assets/images/devices/device3.jpg',
            onelapScore: '10%',
            startRating: 2,
            recommended: '',
            Discount : 'Discount Avl.'
          },
          {
            id: '6',
            name: 'LMU-800-Series ',
            image: 'assets/images/devices/device1.jpg',
            onelapScore: '40%',
            startRating: 1,
            recommended: '',
            Discount : ''
          },
          {
            id: '6',
            name: 'Teltonika-FMB125 ',
            image: 'assets/images/devices/device2.jpg',
            onelapScore: '60%',
            startRating: 4,
            recommended: '',
            Discount : ''
          },
          {
            id: '8',
            name: 'Teltonika-FMB110',
            image: 'assets/images/devices/device3.jpg',
            onelapScore: '40%',
            startRating: 3,
            recommended: '',
            Discount : ''
          },
      
        ]
 ngOnInit() {
  
}
}