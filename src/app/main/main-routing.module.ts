import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HardwaresComponent } from './hardwares/hardwares.component';
import { GPStrackersComponent } from './hardwares/gpstrackers/gpstrackers.component';
import { HeavyEquipmentsComponent } from './heavy-equipments/heavy-equipments.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { MunicipalcorporationComponent } from './municipalcorporation/municipalcorporation.component';
import { DronesComponent } from './drones/drones.component';
import { RentalbikesComponent } from './rentalbikes/rentalbikes.component';
import { DeliveryComponent } from './delivery/delivery.component';


const routes: Routes = [
    {
        path: "", component: MainComponent, children: [
            { path: "", component: HomepageComponent },
            { path: "home", component: HomepageComponent },
            { path: "hardwares", component: HardwaresComponent },
            { path: "Gpstrackers", component: GPStrackersComponent },
            { path: "heavyEquipments", component: HeavyEquipmentsComponent },
            { path: "logistics", component: LogisticsComponent },
            { path: "municipal", component: MunicipalcorporationComponent },
            { path: "drones", component: DronesComponent },
            { path: "rentalbikes", component: RentalbikesComponent },
            { path: "delivery", component: DeliveryComponent },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }