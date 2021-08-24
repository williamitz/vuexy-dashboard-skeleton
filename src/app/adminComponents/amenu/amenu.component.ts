import { Component, OnInit, ViewChild } from '@angular/core';


import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-amenu',
  templateUrl: './amenu.component.html',
  styleUrls: ['./amenu.component.scss']
})
export class AmenuComponent implements OnInit {

  @ViewChild(PerfectScrollbarDirective, { static: false }) directiveRef?: PerfectScrollbarDirective;

  coreConfig: any;
  menu: any;
  isCollapsed: boolean;
  isScrolled: boolean = false;


  constructor(
  ) {
    // Set the private defaults
  }

  ngOnInit(): void {
   
  }


   ngOnDestroy(): void {
  }

}
