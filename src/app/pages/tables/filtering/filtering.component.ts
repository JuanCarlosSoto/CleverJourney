import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { TablesService, Element } from '../tables.service';

@Component({
    selector: 'app-filtering',
    templateUrl: './filtering.component.html'
})
export class FilteringComponent {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    public displayedColumns = ['messages', 'edit', 'hot', 'axisref', 'pocustomerref', 'sovendorref', 'requesteddate', 'shippingdate', 'eta', 'delivery', 'shipper', 'consignee', 'commentslog', 'carrier', 'service', 'status', 'hu', 'wt', 'quoteno', 'pickupno', 'prono', 'duration'];
    public dataSource: any;
    public settings: Settings;
    constructor(public appSettings: AppSettings, private tablesService: TablesService) {
        this.settings = this.appSettings.settings;
        this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}