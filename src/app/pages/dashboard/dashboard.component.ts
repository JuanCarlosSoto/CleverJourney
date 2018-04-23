import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import {MatTableDataSource} from '@angular/material';
import { Element, TablesService } from '../tables/tables.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [TablesService]
})
export class DashboardComponent implements OnInit {

    public settings: Settings;
    public dataSource: any;

    public displayedColumns = ['edit', 'axisref', 'pocustomerref', 'sovendorref', 'requesteddate', 'loc'];

    constructor(public appSettings: AppSettings, private tablesService: TablesService, private router: Router) {
        this.settings = this.appSettings.settings;
        this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

        setTimeout(() => {

            const el = document.getElementById('leaflet-map');

            L.Icon.Default.imagePath = 'assets/img/vendor/leaflet/';
            const map = L.map(el).setView([37.8, -96], 4);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: 'Sales per area'
            }).addTo(map);

            L.circle([32.525829, -86.735747], {
                color: 'blue',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 50000
            }).addTo(map).bindPopup('$15, 000');

            // 31.711940, -106.435774
            L.circle([31.711940, -106.435774], {
                color: 'green',
                fillColor: '#0f3',
                fillOpacity: 0.5,
                radius: 100000
            }).addTo(map).bindPopup('$12, 000');

            L.circle([30.711940, -100.435774], {
                color: 'green',
                fillColor: '#0f3',
                fillOpacity: 0.5,
                radius: 100000
            }).addTo(map).bindPopup('$9000');

            L.circle([40.711940, -80.435774], {
                color: 'green',
                fillColor: '#0f3',
                fillOpacity: 0.5,
                radius: 100000
            }).addTo(map).bindPopup('$7000');


            /*L.marker([51.5, -0.09]).addTo(map)
              .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
              .openPopup();*/

        });


    }
    displayEdit() {
        this.router.navigate(['./form-controls/input']);
    }

}