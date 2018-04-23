import { Injectable } from '@angular/core';

export interface Element {
    hot: boolean;
    axisref: string;
    pocustomerref: string;
    sovendorref: string;
    requesteddate: string;
    shippingdate: string;
    eta: string;
    delivery: string;
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

const data: Element[] = [
    {hot: false, axisref: 'AX001', pocustomerref: 'PO001', sovendorref: 'SO0010', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Saia Burgess/ Johnson Elec.', consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '5',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '32.525829, -86.735747'},
    {hot: true,  axisref: 'AX002', pocustomerref: 'PO004', sovendorref: 'SO0987', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Valeo SLP',                   consignee: 'AI',             commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: 'BOOKED', hu: '50', wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '31.711940, -106.435774'},
    {hot: false, axisref: 'AX003', pocustomerref: 'PO045', sovendorref: 'S00063', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Cebi / Huamantla',            consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '30.711940, -100.435774'},
    {hot: false, axisref: 'AX004', pocustomerref: 'PO00X', sovendorref: 'S99878', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '40.711940, -80.435774'},
    {hot: true,  axisref: 'AX005', pocustomerref: 'PO0XX', sovendorref: 'S00005', requesteddate: '04/27/18', shippingdate: '05/02/18', eta: '', delivery: '', shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '31.711940, -106.435774'},
    {hot: false, axisref: 'AX006', pocustomerref: 'POXXX', sovendorref: 'S00006', requesteddate: '04/27/18', shippingdate: '05/02/18', eta: '', delivery: '', shipper: 'NG Laredo',                   consignee: 'Baxter TN',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '32.525829, -86.735747'},
    {hot: false, axisref: 'AX007', pocustomerref: 'PO056', sovendorref: 'SO987',  requesteddate: '04/27/18', shippingdate: '05/02/18', eta: '', delivery: '', shipper: 'Cebi / Huamantla',            consignee: 'Airtemp Puebla', commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '30.711940, -100.435774'},
    {hot: false, axisref: 'AX008', pocustomerref: 'PO006', sovendorref: 'S00008', requesteddate: '04/27/18', shippingdate: '05/03/18', eta: '', delivery: '', shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: 'BOOKED', hu: '2',  wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '40.711940, -80.435774'},
    {hot: false, axisref: 'AX009', pocustomerref: 'PO0X7', sovendorref: 'S00009', requesteddate: '04/27/18', shippingdate: '05/03/18', eta: '', delivery: '', shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '32.525829, -86.735747'},
    {hot: false, axisref: 'AX010', pocustomerref: 'POXX8', sovendorref: 'S00010', requesteddate: '04/27/18', shippingdate: '05/03/18', eta: '', delivery: '', shipper: 'NG Laredo',                   consignee: 'Baxter TN',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '', loc: '31.711940, -106.435774'},
    {hot: false, axisref: 'AX011', pocustomerref: 'PO009', sovendorref: 'S00011', requesteddate: '04/27/18', shippingdate: '05/03/18', eta: '', delivery: '', shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: '',       hu: '2',  wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '', loc: '40.711940, -80.435774'},
    {hot: true,  axisref: 'AX012', pocustomerref: 'PO012', sovendorref: 'S00012', requesteddate: '04/27/18', shippingdate: '05/04/18', eta: '', delivery: '', shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '', loc: '32.525829, -86.735747'},
    {hot: false, axisref: 'AX013', pocustomerref: 'POX13', sovendorref: 'S00013', requesteddate: '04/27/18', shippingdate: '05/04/18', eta: '', delivery: '', shipper: 'NG Laredo',                   consignee: 'Baxter TN',      commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: '',       hu: '2',  wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '', loc: '31.711940, -106.435774'}
];

const topPrice: Element[] = [
    {hot: false, axisref: 'AX001', pocustomerref: 'PO001', sovendorref: 'SO0010', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Saia Burgess/ Johnson Elec.', consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '5',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '32.525829, -86.735747'},
    {hot: true,  axisref: 'AX002', pocustomerref: 'PO004', sovendorref: 'SO0987', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Valeo SLP',                   consignee: 'AI',             commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: 'BOOKED', hu: '50', wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '31.711940, -106.435774'},
    {hot: false, axisref: 'AX003', pocustomerref: 'PO045', sovendorref: 'S00063', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Cebi / Huamantla',            consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '30.711940, -100.435774'},
    {hot: false, axisref: 'AX004', pocustomerref: 'PO00X', sovendorref: 'S99878', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '32.525829, -86.735747'},
    {hot: true,  axisref: 'AX005', pocustomerref: 'PO0XX', sovendorref: 'S00005', requesteddate: '04/27/18', shippingdate: '05/02/18', eta: '', delivery: '', shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '31.711940, -106.435774'},
];

const topOld: Element[] = [
    {hot: false, axisref: 'AX001', pocustomerref: 'PO001', sovendorref: 'SO0010', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Saia Burgess/ Johnson Elec.', consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: '',       hu: '5',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '32.525829, -86.735747'},
    {hot: true,  axisref: 'AX002', pocustomerref: 'PO004', sovendorref: 'SO0987', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Valeo SLP',                   consignee: 'AI',             commentslog: 'Autoparts', carrier: '', service: 'CUSTOMS BROKERAGE', status: 'BOOKED', hu: '50', wt: 'CUSTOMS BROKERAGE', quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '31.711940, -106.435774'},
    {hot: false, axisref: 'AX003', pocustomerref: 'PO045', sovendorref: 'S00063', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Cebi / Huamantla',            consignee: 'Baxter - TN',    commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '31.711940, -106.435774'},
    {hot: false, axisref: 'AX004', pocustomerref: 'PO00X', sovendorref: 'S99878', requesteddate: '04/27/18', shippingdate: '05/01/18', eta: '', delivery: '', shipper: 'Cebi / Huamantla',            consignee: 'Nuevo Laredo',   commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '2d', loc: '40.711940, -80.435774'},
    {hot: true,  axisref: 'AX005', pocustomerref: 'PO0XX', sovendorref: 'S00005', requesteddate: '04/27/18', shippingdate: '05/02/18', eta: '', delivery: '', shipper: 'Nuevo Laredo',                consignee: 'NG Laredo',      commentslog: 'Autoparts', carrier: '', service: 'LTL',               status: 'BOOKED', hu: '2',  wt: 'LTL',               quoteno: '', pickupno: '', prono: '', duration: '3d', loc: '32.525829, -86.735747'},
];


@Injectable()
export class TablesService {

  constructor() { }

  getData(){
    return data;
  }

  getTopPrice() {
    return topPrice;
  }

  getTopOld(){
    return topOld;
  }
}
