import { HttpService } from './../http.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ListComponent implements OnInit {

  brews: any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(data);
    });
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

}
