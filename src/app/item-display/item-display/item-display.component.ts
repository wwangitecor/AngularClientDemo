import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

export interface PeriodicElement {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
//{"date":"2020-11-01T15:52:22.0420248+01:00","temperatureC":1,"temperatureF":33,"summary":"Scorching"}]
@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {
  data: any;

  displayedColumns: string[] = ['date', 'temperatureC', 'temperatureF', 'summary'];
  dataSource = ELEMENT_DATA;
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(resp => {
      console.log(resp);

      // this.data = Array.of(resp.body);
      // console.log(this.data);

      this.data = resp.body;
      console.log(this.data);

      this.dataSource = this.data;

    });
  }

}
