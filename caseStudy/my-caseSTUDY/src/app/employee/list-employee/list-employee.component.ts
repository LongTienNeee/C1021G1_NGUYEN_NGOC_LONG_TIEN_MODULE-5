import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [
    {
      employeeId: 1,
      employeeCode: 'NV-0001',
      employeeName: 'Minh Nhựa',
      employeeBirthday: '01/01/1999',
      employeeGender: 'Nam',
      employeeIdCart: '1954729184',
      employeeSalary: 150,
      employeeAddress: 'Đà Nẵng',
      employeeDivision: "Phục Vụ",
      employeeEducationDegree: 'Sau đại học',
      employeePosition: 'Lễ Tân',
    },
    {
      employeeId: 2,
      employeeCode: 'NV-0002',
      employeeName: 'Lê Thành Long',
      employeeBirthday: '01/01/1995',
      employeeGender: 'Nam',
      employeeIdCart: '1954721424',
      employeeSalary: 100,
      employeeAddress: 'Quảng Nam',
      employeeDivision: "Phục Vụ",
      employeeEducationDegree: 'Sau đại học',
      employeePosition: 'Lau Dọn',
    },
    {
      employeeId: 3,
      employeeCode: 'NV-0003',
      employeeName: 'Đức Trọng',
      employeeBirthday: '14/02/1998',
      employeeGender: 'Nam',
      employeeIdCart: '1954125684',
      employeeSalary: 200,
      employeeAddress: 'Huế',
      employeeDivision: "Chuyên Viên",
      employeeEducationDegree: 'Đại Học',
      employeePosition: "Quản lí",
    },
    {
      employeeId: 4,
      employeeCode: 'NV-0004',
      employeeName: 'Lê Thị Nhung',
      employeeBirthday: '03/03/1999',
      employeeGender: 'Nữ',
      employeeIdCart: '1954124584',
      employeeSalary: 200,
      employeeAddress: 'Vinh',
      employeeDivision: "Quản lí",
      employeeEducationDegree: 'Trung Cấp',
      employeePosition: 'Giám đốc',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
