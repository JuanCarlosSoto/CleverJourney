import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { TablesService, Element } from '../tables.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-filtering',
    templateUrl: './filtering.component.html',
    styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    public displayedColumns = ['messages', 'edit', 'hot', 'axisref', 'pocustomerref', 'sovendorref', 'requesteddate', 'shippingdate', 'eta', 'delivery', 'shipper', 'consignee', 'commentslog', 'carrier', 'service', 'status', 'hu', 'wt', 'quoteno', 'pickupno', 'prono', 'duration'];
    public dataSource: any;
    public settings: Settings;
    constructor(public appSettings: AppSettings, private tablesService: TablesService, private router: Router) {
        this.settings = this.appSettings.settings;
        this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    displayComments() {
        this.router.navigate(['/chat']);
    }

    displayAdd() {
        this.router.navigate(['./form-controls/form-field']);
    }

    displayEdit() {
        this.router.navigate(['./form-controls/input']);
    }

}