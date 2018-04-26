import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AxisOrder, TablesService } from '../../tables/tables.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
    providers: [TablesService]
})
export class FormFieldComponent {
  form: FormGroup;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public fb: FormBuilder, private ts: TablesService, private router: Router) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
      this.form = this.fb.group({
          'hot': [],
          'axisref': [],
          'pocustref': [],
          'vendorref': [],
          'requesteddate': [],
          'shippingdate': [],
          'eta': [],
          'delivery': [],
          'shipper': [],
          'consignee': [],
          'commentslog': [],
          'carrier': [],
          'service': [],
          'orderstatus': [],
          'hu': [],
          'wt': [],
          'quoteno': [],
          'pickupno': [],
          'prono': [],
          'duration': []
      });
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
      // myOrder.axisref = this.form.value['axisref'];
      // myOrder = {hot: this.form.value.hot, axisref: 'AX001', pocustomerref: 'PO001', sovendorref: 'SO0010', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Saia Burgess/ Johnson Elec.', consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '5',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '32.525829, -86.735747'};
      // myOrder = new AxisOrder(this.form.value.hot, this.form.value.axisref, this.form);
      this.ts.addElement(myOrder);
      this.router.navigate(['/tables/filtering']);
  }
}
