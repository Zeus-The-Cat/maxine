var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AppRoutingModule } from './app-routing.module';
import { GeojsonDataService } from './Service/geojson-data.service';
import { CitiesService } from './Service/cities.service';
import { NeighbourhoodService } from './Service/neighbourhood.service';
import { LocationService } from './Service/location.service';
import { ToggleService } from './Service/toggle.service';
import { DataTableService } from './Service/data-table.service';
import { DataTable2Service } from './Service/data-table2.service';
import { DataTable3Service } from './Service/data-table3.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
// angular material imports begin here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { NeighborhoodComponent } from './neighborhood/neighborhood.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToggleableDirective } from './control-panel/toggleable.directive';
import { View1DataTableComponent } from './data-table/view1-data-table/view1-data-table.component';
import { View2DataTableComponent } from './data-table/view2-data-table/view2-data-table.component';
import { View3DataTableComponent } from './data-table/view3-data-table/view3-data-table.component';
import { View4DataTableComponent } from './data-table/view4-data-table/view4-data-table.component';
import { View1DataChartComponent } from './data-table/view1-data-chart/view1-data-chart.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                MapComponent,
                ControlPanelComponent,
                NeighborhoodComponent,
                DataTableComponent,
                ToggleableDirective,
                View1DataTableComponent,
                View2DataTableComponent,
                View3DataTableComponent,
                View4DataTableComponent,
                View1DataChartComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDf4tl3dmehWlQPMVkud7Z1IjwbVTZATQU',
                    libraries: ['places']
                }),
                BrowserAnimationsModule,
                HttpModule,
                HttpClientModule,
                AppRoutingModule,
                ChartsModule,
                FlexLayoutModule,
                // NgbModule.forRoot()
                // Angular materials
                MatToolbarModule,
                MatIconModule,
                MatInputModule,
                MatGridListModule,
                MatSidenavModule,
                MatExpansionModule,
                MatListModule,
                MatSelectModule,
                MatTableModule,
                ScrollingModule,
                MatTooltipModule
            ],
            providers: [
                LocationService,
                CitiesService,
                GeojsonDataService,
                NeighbourhoodService,
                ToggleService,
                DataTableService,
                DataTable2Service,
                DataTable3Service,
                DataTable3Service,
                GoogleMapsAPIWrapper
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map