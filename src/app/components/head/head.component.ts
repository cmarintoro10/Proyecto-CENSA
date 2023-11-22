import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html'
})
export class HeadComponent implements OnInit {

  title: string = 'Tienda de NFTs';
  viewport: string = 'width=device-width, initial-scale=1';
  charset: string = 'utf-8';
  stylesheet: string = 'https://fonts.googleapis.com/css?family=Montserrat:400,700';
  favicon: string = 'icon.ico';

  constructor() {}

  ngOnInit() {}

}
