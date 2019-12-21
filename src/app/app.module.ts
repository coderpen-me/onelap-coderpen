import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RatingModule } from 'ng-starrating'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdRatingDecimalModule} from './main/hardwares/gpstrackers/rating.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    MainModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    RatingModule,
    NgbModule,
    NgbdRatingDecimalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }