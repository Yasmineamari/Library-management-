import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products = [
    { name: 'Product 1', price: 10.99, image: 'product1.jpg' },
    { name: 'Product 2', price: 14.99, image: 'product2.jpg' },
    { name: 'Product 3', price: 9.99, image: 'product3.jpg' },
    // add more products as needed
  ];

  ngOnInit() {
    // component initialization code
  }
}
