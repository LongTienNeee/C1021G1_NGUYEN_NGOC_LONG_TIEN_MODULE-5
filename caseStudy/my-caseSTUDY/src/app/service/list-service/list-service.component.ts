import { Component, OnInit } from '@angular/core';
import {Service} from './service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  services: Service[] = [
    {
      serviceId: 1,
      serviceCode: 'S-001',
      serviceName: 'Phòng Hoàng gia',
      serviceArea: 20,
      serviceCost: 2000,
      serviceMaxPeople: 2,
      serviceFloor: 1,
    },
    {
      serviceId: 2,
      serviceCode: 'S-002',
      serviceName: 'Phòng Hoàng gia',
      serviceArea: 20,
      serviceCost: 2000,
      serviceMaxPeople: 2,
      serviceFloor: 1,
    },
    {
      serviceId: 1,
      serviceCode: 'S-001',
      serviceName: 'Phòng Hoàng gia',
      serviceArea: 20,
      serviceCost: 2000,
      serviceMaxPeople: 2,
      serviceFloor: 1,
    },
    {
      serviceId: 1,
      serviceCode: 'S-001',
      serviceName: 'Phòng Hoàng gia',
      serviceArea: 20,
      serviceCost: 2000,
      serviceMaxPeople: 2,
      serviceFloor: 1,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
