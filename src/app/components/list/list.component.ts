import { Component, OnInit } from '@angular/core';

import { ListItemService } from '../../shared/list-item.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userCards: User[];
  currentPageNumber: number = 1;

  constructor(
    public server: ListItemService
  ) { }

  ngOnInit(): void {
    
    // this.server.getUsers(this.pageNumber).subscribe((data: any) => {
    //   if (data) {
    //     let temporaryData = data;
    //     this.userCards = temporaryData.data;
    //     console.log(this.userCards);
    //   }
    // }, error => {
    //   console.log(error);
    // });

    this.getTheUsers(this.currentPageNumber);
  }

  getTheUsers(currentPageNumber: number) {
    this.currentPageNumber = currentPageNumber;
    this.server.getUsers(currentPageNumber).subscribe((data: any) => {
      if (data) {
        let temporarytData = data;
        this.userCards = temporarytData.data;
        console.log(this.userCards);
      }
    }, error => {
      console.log(error);
    });
  }

  identify(index) {
    return index;
  }

}
