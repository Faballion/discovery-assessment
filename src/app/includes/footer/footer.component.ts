import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  aboutlinks = [
    'Our business',
    'Investor relations',
    'Sustainability',
    'Sponsorships',
    'Life insurance',
    'Newsroom',
    'Careers at Discovery',
  ];

  joinLinks = [
    'Individuals',
    'Business',
    'Financial advisors',
    'Healthcare professionals',
    'Suppliers',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
