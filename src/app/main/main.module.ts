import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VideoSectionComponent } from './homepage/video-section/video-section.component';
import { FeaturesComponent } from './homepage/features/features.component';
import { CallbackComponent } from './homepage/callback/callback.component';
import { TrackingComponent } from './homepage/tracking/tracking.component';
import { ClientstoriesComponent } from './homepage/clientstories/clientstories.component';
import { ProcessComponent } from './homepage/process/process.component';
import { HardwaresComponent } from './hardwares/hardwares.component';
import { GPStrackersComponent } from './hardwares/gpstrackers/gpstrackers.component';
import { MainRoutingModule } from './main-routing.module';
import { LogisticsComponent } from './logistics/logistics.component';
import { MunicipalcorporationComponent } from './municipalcorporation/municipalcorporation.component';
import { DronesComponent } from './drones/drones.component';
import { HeavyEquipmentsComponent } from './heavy-equipments/heavy-equipments.component';
import { RentalbikesComponent } from './rentalbikes/rentalbikes.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { RatingsComponent } from './hardwares/gpstrackers/ratings/ratings.component';


@NgModule({
  declarations: [
    MainComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    VideoSectionComponent,
    FeaturesComponent,
    CallbackComponent,
    TrackingComponent,
    ClientstoriesComponent,
    ProcessComponent,
    HardwaresComponent,
    GPStrackersComponent,
    LogisticsComponent,
    MunicipalcorporationComponent,
    DronesComponent,
    HeavyEquipmentsComponent,
    RentalbikesComponent,
    DeliveryComponent,
    RatingsComponent,
  ],
  imports: [
    MainRoutingModule,
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
