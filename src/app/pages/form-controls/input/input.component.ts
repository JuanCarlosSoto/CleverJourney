import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { TablesService, AxisOrder } from '../../tables/tables.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    providers: [TablesService]
})
export class InputComponent implements OnInit {
    form: FormGroup;
    public settings: Settings;
    public order: AxisOrder;
    constructor(public appSettings: AppSettings,
                public fb: FormBuilder,
                private ts: TablesService,
                private router: Router,
                private ar: ActivatedRoute) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit(): void {
        let oid: number;
        this.ar.params.subscribe(p => {
            oid = p['id'];
        });
        this.order = this.ts.findOne(oid);
        this.form = this.fb.group({
            'hot': [],
            'axisref': [this.order.axisref],
            'pocustref': [this.order.pocustomerref],
            'vendorref': [this.order.sovendorref],
            'requesteddate': [this.order.requesteddate],
            'shippingdate': [this.order.shippingdate],
            'eta': [this.order.eta],
            'delivery': [this.order.delivery],
            'shipper': [this.order.shipper],
            'consignee': [this.order.consignee],
            'commentslog': [this.order.commentslog],
            'carrier': [this.order.carrier],
            'service': [this.order.service],
            'orderstatus': [this.order.status],
            'hu': [this.order.hu],
            'wt': [this.order.wt],
            'quoteno': [this.order.quoteno],
            'pickupno': [this.order.pickupno],
            'prono': [this.order.prono],
            'duration': [this.order.duration]
        });
        /* this.form.setValue({
            axisref: this.order.axisref,
            hu: this.order.hu,

        }); */
    }
    private transformDate(dateToTransform: Date): string {
        if (dateToTransform) {
            const m = dateToTransform.getMonth() + 1;
            return m + '/' + dateToTransform.getDate() + '/' + dateToTransform.getFullYear();
        } else {
            return '';
        }
    }
    onSubmit() {
        let myOrder: AxisOrder;
        myOrder = new AxisOrder();
        myOrder.hot = this.form.value.hot;
        myOrder.axisref = this.form.value.axisref;
        myOrder.pocustomerref = this.form.value.pocustref;
        myOrder.sovendorref = this.form.value.vendorref;
        myOrder.requesteddate = this.transformDate(this.form.value.requesteddate);
        myOrder.shippingdate = this.transformDate(this.form.value.shippingdate);
        myOrder.eta = this.transformDate(this.form.value.eta);
        myOrder.delivery = this.transformDate(this.form.value.delivery);
        myOrder.shipper = this.form.value.shipper;
        myOrder.consignee = this.form.value.consignee;
        myOrder.commentslog = this.form.value.commentslog;
        myOrder.carrier = this.form.value.carrier;
        myOrder.service = this.form.value.service;
        myOrder.status = this.form.value.orderstatus;
        myOrder.hu = this.form.value.hu;
        myOrder.wt = this.form.value.wt;
        myOrder.quoteno = this.form.value.quoteno;
        myOrder.pickupno = this.form.value.pickupno;
        myOrder.prono = this.form.value.prono;
        myOrder.duration = this.form.value.duration;
        this.ts.addElement(myOrder);
        this.router.navigate(['/tables/filtering']);
    }
}
