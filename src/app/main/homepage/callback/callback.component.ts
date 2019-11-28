import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  
  constructor() {
  }
  public ShowPop() {
    Swal.fire({
      title: 'Sent!',
      text: 'We will get back to you soon',
      icon: 'success',
      confirmButtonText: 'Okay'
    });
  }
  ngOnInit() {
  }

}
