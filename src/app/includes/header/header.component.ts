import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [
    'Portfolio',
    'Bank',
    'Medical aid',
    'Gap cover',
    'Life insurance',
    'Investments',
    'Car and home insurance',
    'Vitality',
    'Credit card',
    'Reward partners',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
