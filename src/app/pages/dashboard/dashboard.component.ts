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
    public dsTopOld: any;
    public dsTopPrice: any;
    public circle: any;
    public map: any;

    public displayedColumns = ['edit', 'axisref', 'pocustomerref', 'sovendorref', 'requesteddate', 'loc'];

    constructor(public appSettings: AppSettings, private tablesService: TablesService, private router: Router) {
        this.settings = this.appSettings.settings;
        this.dsTopOld = new MatTableDataSource<Element>(this.tablesService.getTopOld());
        this.dsTopPrice = new MatTableDataSource<Element>(this.tablesService.getTopPrice());
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

        setTimeout(() => {

            const el = document.getElementById('leaflet-map');

            L.Icon.Default.imagePath = 'assets/img/vendor/leaflet/';
            this.map = L.map(el).setView([37.8, -96], 4);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: 'Sales per area'
            }).addTo(this.map);

            /*L.circle([32.525829, -86.735747], {
                color: 'blue',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 50000
            }).addTo(this.map).bindPopup('$15, 000');

            // 31.711940, -106.435774
            L.circle([31.711940, -106.435774], {
                color: 'green',
                fillColor: '#0f3',
                fillOpacity: 0.5,
                radius: 100000
            }).addTo(this.map).bindPopup('$12, 000');

            L.circle([30.711940, -100.435774], {
                color: 'green',
                fillColor: '#0f3',
                fillOpacity: 0.5,
                radius: 100000
            }).addTo(this.map).bindPopup('$9000');

            L.circle([40.711940, -80.435774], {
                color: 'green',
                fillColor: '#0f3',
                fillOpacity: 0.5,
                radius: 100000
            }).addTo(this.map).bindPopup('$7000');*/


            /*L.marker([51.5, -0.09]).addTo(map)
              .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
              .openPopup();*/

        });


    }
    displayEdit() {
        this.router.navigate(['./form-controls/input']);
    }

    paintCircle(loc: string, legend: string) {

        // Clear Map
        if(this.circle) {
            this.circle.removeFrom(this.map);
        }

        /*this.alCircle.setStyle({
            color: 'black',
            fillColor: 'yellow'
        });*/
        // Transform loc to number
        const splittedNumbers: string[] = loc.split(',');
        let locX: Number;
        let locY: Number;

        locX = Number(splittedNumbers[0]);
        locY = Number(splittedNumbers[1]);

        this.circle = L.circle([locX, locY], {
            color: 'green',
            fillCollor: 'green',
            fillOpacity: 0.5,
            radius: 200000
        }).addTo(this.map).bindPopup(legend).openPopup();;

    }
}