import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.scss']
})
export class CreateSetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// {
//   name : [null,[]],
//   set_num : [null,[]],
//   year:[null,[]],
//   theme_id : [null,[]],
//   set_img_url:[null,[]],
//   set_url:[null,[]],
//   lego_price:[null,[]],     
//   buy_price:[null,[]],
//   buy_date: [null,[]],
//   buy_loc: [null,[]],
//   sale_date: [null,[]],
//   sale_price: [null,[]],
//   status:[null,[]],
// }