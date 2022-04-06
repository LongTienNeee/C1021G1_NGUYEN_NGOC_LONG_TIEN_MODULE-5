import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers : Customer[] = [
    {
      customerId : 1,
      customerCode : "KH-0001",
      customerName: "Tiên",
      customerBirthday: "10/01/2002",
      customerGender : 'Nam',
      customerIDCart : '231356432',
      customerEmail: "longtien@gmail.com",
      customerPhone: '0913575135',
      customerAddress: "Đà Nẵng"
    },
    {
      customerId : 2,
      customerCode : "KH-0002",
      customerName: "Trọng",
      customerBirthday: "02/01/2002",
      customerGender : 'Nam',
      customerIDCart : '231356431',
      customerEmail: "ductrong@gmail.com",
      customerPhone: '0913571324',
      customerAddress: "Huế"
    },
    {
      customerId : 3,
      customerCode : "KH-0003",
      customerName: "Đạt",
      customerBirthday: "22/01/2003",
      customerGender : 'Nam',
      customerIDCart : '231356452',
      customerEmail: "superman@gmail.com",
      customerPhone: '0913233135',
      customerAddress: "Nghệ An"
    },
    {
      customerId : 4,
      customerCode : "KH-0004",
      customerName: "Anh Hoàng",
      customerBirthday: "13/2/1996",
      customerGender : 'Nam',
      customerIDCart : '231351432',
      customerEmail: "deptraihocgioi@gmail.com",
      customerPhone: '0919999935',
      customerAddress: "Quy Nhơn"
    },
    {
      customerId : 5,
      customerCode : "KH-0005",
      customerName: "Duy Thuận",
      customerBirthday: "03/012/2003",
      customerGender : 'Nữ',
      customerIDCart : '231141232',
      customerEmail: "coGaiHoiNach@gmail.com",
      customerPhone: '0913551256',
      customerAddress: "Hà nội"
    },
    {
      customerId : 6,
      customerCode : "KH-0006",
      customerName: "Nhật Hiếu",
      customerBirthday: "03/05/1997",
      customerGender : 'Nam',
      customerIDCart : '461236432',
      customerEmail: "anhThoDienMayMan@gmail.com",
      customerPhone: '0913525135',
      customerAddress: "Hội An"
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
