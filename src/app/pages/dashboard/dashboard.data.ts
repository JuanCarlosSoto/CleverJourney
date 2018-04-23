import {Injectable} from '@angular/core';

export interface Element {
    edit: string;
    axisref: string;
    pocustomerref: string;
    sovendorref: string;
    requesteddate: string;
    loc: string;
}

const data: Element[] = [
    {edit: 'True', axisref: 'AX001', pocustomerref: 'PO001', sovendorref: 'SO0010', requesteddate: '04/27/18', loc: '05/01/18'}
];


@Injectable()
export class TablesService {

    constructor() { }

    getData() {
        return data;
    }
}




export const orders = [
   {
    name: 'Orders',
    series: [
      {
        name: "1980",
        value: 21632
      }
    ]
  }
]

export const products = [
  {
    "name": "Product-1",
    "value": 69400
  },
  {
    "name": "Product-2",
    "value": 59400
  },
  {
    "name": "Product-3",
    "value": 82400
  },
  {
    "name": "Product-4",
    "value": 73400
  },
  {
    "name": "Product-5",
    "value": 25400
  },
  {
    "name": "Product-6",
    "value": 23400
  },
  {
    "name": "Product-7",
    "value": 49300
  },
  {
    "name": "Product-8",
    "value": 55400
  },
  {
    "name": "Product-9",
    "value": 37400
  },
  {
    "name": "Product-10",
    "value": 65220
  },
  {
    "name": "Product-11",
    "value": 79400
  },
  {
    "name": "Product-12",
    "value": 58400
  },
  {
    "name": "Product-13",
    "value": 41400
  },
  {
    "name": "Product-14",
    "value": 37400
  },
  {
    "name": "Product-15",
    "value": 33700
  },
  {
    "name": "Product-16",
    "value": 42700
  },
  {
    "name": "Product-17",
    "value": 52700
  },
  {
    "name": "Product-18",
    "value": 62700
  }
]

export const customers = [
   {
    name: 'Customers',
    series: [
      {
        name: "2000",
        value: 34502
      }
    ]
  }
]

export const refunds = [
  {
    "name": "VIP-1",
    "value": 701
  },
  {
    "name": "VIP-2",
    "value": 570
  },
  {
    "name": "VIP-3",
    "value": 637
  },
  {
    "name": "VIP-4",
    "value": 627
  },
  {
    "name": "VIP-5",
    "value": 737
  },
  {
    "name": "VIP-6",
    "value": 781
  },
  {
    "name": "VIP-7",
    "value": 721
  },
  {
    "name": "VIP-8",
    "value": 701
  },
  {
    "name": "VIP-9",
    "value": 697
  },
  {
    "name": "VIP-10",
    "value": 701
  },
  {
    "name": "Item-11",
    "value": 657
  },
  {
    "name": "Item-12",
    "value": 477
  },
  {
    "name": "Item-13",
    "value": 417
  },
  {
    "name": "Item-14",
    "value": 570
  },
  {
    "name": "Item-15",
    "value": 531
  }
]

export const disk_space = [
  {
    "name": "1 Day",
    "value": 178
  },
  {
    "name": "2 Days",
    "value": 340
  },
  {
    "name": "3 Days",
    "value": 280
  }
]

export const analytics = [
  {
    name: 'Previous year',
    series: [
      {
        name: 'September 2017',
        value: 6632
      },
      {
        name: 'October 2017',
        value: 6589
      },
      {
        name: 'November 2017',
        value: 2458
      },
      {
        name: 'December 2017',
        value: 2632
      },
      {
        name: 'January',
        value: 2305
      },
      {
        name: 'February',
        value: 2412
      },
      {
        name: 'March',
        value: 6285
      },
      {
        name: 'April',
        value: 855
      },
        {
            name: 'May',
            value: 7855
        }
    ]
  },
  {
    name: 'Regular Orders',
    series: [
      {
        name: 'September 2017',
        value: 1632
      },
      {
        name: 'October 2017',
        value: 8589
      },
      {
        name: 'November 2017',
        value: 5458
      },
      {
        name: 'December 2017',
        value: 2632
      },
      {
        name: 'January',
        value: 8305
      },
      {
        name: 'February',
        value: 1412
      },
      {
        name: 'March',
        value: 7285
      },
      {
        name: 'April',
        value: 1855
      }
    ]
  },
  {
    name: 'VIP',
    series: [
      {
        name: 'September 2017',
        value: 563
      },
      {
        name: 'October 2017',
        value: 358
      },
      {
        name: 'November 2017',
        value: 458
      },
      {
        name: 'December 2017',
        value: 632
      },
      {
        name: 'January',
        value: 305
      },
      {
        name: 'February',
        value: 412
      },
      {
        name: 'March',
        value: 285
      },
      {
        name: 'April',
        value: 155
      }
    ]
  }
]