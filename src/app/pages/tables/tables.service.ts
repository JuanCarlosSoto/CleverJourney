import { Injectable } from '@angular/core';
import { Data } from '@agm/core/services/google-maps-types';

export class AxisOrder {
    id: number;
    hot: boolean;
    axisref: string;
    pocustomerref: string;
    sovendorref: string;
    requesteddate: Date;
    shippingdate: Date;
    eta: Data;
    delivery: Data;
    shipper: string;
    consignee: string;
    commentslog: string;
    carrier: string;
    service: string;
    status: string;
    hu: string;
    wt: string;
    quoteno: string;
    pickupno: string;
    prono: string;
    duration: string;
    loc: string;
}

const data: AxisOrder[] = [
    {id: 0, hot: false, axisref: 'AX001', pocustomerref: 'PO001', sovendorref: 'SO0010', requesteddate: new Date(2018, 4, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Saia Burgess/ Johnson Elec.', consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '5',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '32.525829, -86.735747'},
    {id: 1, hot: true,  axisref: 'AX002', pocustomerref: 'PO004', sovendorref: 'SO0987', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Valeo SLP',                   consignee: 'AI',             commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: 'BOOKED', hu: '50', wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '31.711940, -106.435774'},
    {id: 2, hot: false, axisref: 'AX003', pocustomerref: 'PO045', sovendorref: 'S00063', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Cebi / Huamantla',            consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '30.711940, -100.435774'},
    {id: 3, hot: false, axisref: 'AX004', pocustomerref: 'PO00X', sovendorref: 'S99878', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '40.711940, -80.435774'},
    {id: 4, hot: true,  axisref: 'AX005', pocustomerref: 'PO0XX', sovendorref: 'S00005', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 2), eta: null, delivery: null, shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '31.711940, -106.435774'},
    {id: 5, hot: false, axisref: 'AX006', pocustomerref: 'POXXX', sovendorref: 'S00006', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 2), eta: null, delivery: null, shipper: 'NG Laredo',                   consignee: 'Baxter TN',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '32.525829, -86.735747'},
    {id: 6, hot: false, axisref: 'AX007', pocustomerref: 'PO056', sovendorref: 'SO987',  requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 2), eta: null, delivery: null, shipper: 'Cebi / Huamantla',            consignee: 'Airtemp Puebla', commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '30.711940, -100.435774'},
    {id: 7, hot: false, axisref: 'AX008', pocustomerref: 'PO006', sovendorref: 'S00008', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 3), eta: null, delivery: null, shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: 'BOOKED', hu: '2',  wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '40.711940, -80.435774'},
    {id: 8, hot: false, axisref: 'AX009', pocustomerref: 'PO0X7', sovendorref: 'S00009', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 3), eta: null, delivery: null, shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '32.525829, -86.735747'},
    {id: 9, hot: false, axisref: 'AX010', pocustomerref: 'POXX8', sovendorref: 'S00010', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 3), eta: null, delivery: null, shipper: 'NG Laredo',                   consignee: 'Baxter TN',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '', loc: '31.711940, -106.435774'},
    {id: 10, hot: false, axisref: 'AX011', pocustomerref: 'PO009', sovendorref: 'S00011', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 3), eta: null, delivery: null, shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: '',       hu: '2',  wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '', loc: '40.711940, -80.435774'},
    {id: 11, hot: true,  axisref: 'AX012', pocustomerref: 'PO012', sovendorref: 'S00012', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 4), eta: null, delivery: null, shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '', loc: '32.525829, -86.735747'},
    {id: 12, hot: false, axisref: 'AX013', pocustomerref: 'POX13', sovendorref: 'S00013', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 4), eta: null, delivery: null, shipper: 'NG Laredo',                   consignee: 'Baxter TN',      commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: '',       hu: '2',  wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '', loc: '31.711940, -106.435774'}
];

const topPrice: AxisOrder[] = [
    {id: 0, hot: false, axisref: 'AX001', pocustomerref: 'PO001', sovendorref: 'SO0010', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Saia Burgess/ Johnson Elec.', consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '5',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '32.525829, -86.735747'},
    {id: 1, hot: true,  axisref: 'AX002', pocustomerref: 'PO004', sovendorref: 'SO0987', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Valeo SLP',                   consignee: 'AI',             commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: 'BOOKED', hu: '50', wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '31.711940, -106.435774'},
    {id: 2, hot: false, axisref: 'AX003', pocustomerref: 'PO045', sovendorref: 'S00063', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Cebi / Huamantla',            consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '30.711940, -100.435774'},
    {id: 3, hot: false, axisref: 'AX004', pocustomerref: 'PO00X', sovendorref: 'S99878', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '32.525829, -86.735747'},
    {id: 4, hot: true,  axisref: 'AX005', pocustomerref: 'PO0XX', sovendorref: 'S00005', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 2), eta: null, delivery: null, shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '31.711940, -106.435774'},
];

const topOld: AxisOrder[] = [
    {id: 1, hot: false, axisref: 'AX004', pocustomerref: 'PO004', sovendorref: 'SO0010', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Saia Burgess/ Johnson Elec.', consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '5',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '32.525829, -86.735747'},
    {id: 2, hot: true,  axisref: 'AX005', pocustomerref: 'PO045', sovendorref: 'SO0987', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Valeo SLP',                   consignee: 'AI',             commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: 'BOOKED', hu: '50', wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '31.711940, -106.435774'},
    {id: 3, hot: false, axisref: 'AX001', pocustomerref: 'PO045', sovendorref: 'S00063', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Cebi / Huamantla',            consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '31.711940, -106.435774'},
    {id: 4, hot: false, axisref: 'AX003', pocustomerref: 'PO001', sovendorref: 'S99878', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 1), eta: null, delivery: null, shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '40.711940, -80.435774'},
    {id: 5, hot: true,  axisref: 'AX002', pocustomerref: 'PO088', sovendorref: 'S00005', requesteddate: new Date(2018, 3, 27), shippingdate: new Date(2018, 4, 2), eta: null, delivery: null, shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '32.525829, -86.735747'},
];


@Injectable()
export class TablesService {

  constructor() { }

  getData() {
    return data;
  }

  getTopPrice() {
    return topPrice;
  }

  getTopOld() {
    return topOld;
  }
  addElement(element: AxisOrder) {
      element.id = data.length;
      data.push(element);
  }
  findOne(id: number): AxisOrder {
      console.log('finding id:' + id);
      /*if (id > data.length - 1 || id < 0) {
          return null;
      } else {*/
          let result: AxisOrder;
          result = data.find(n => n.id == id);
          console.log(result);
          return result;
          // return data.find(n => n.id == id);
      // }
  }


}
