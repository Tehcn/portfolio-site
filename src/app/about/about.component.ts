import { Component, OnInit } from '@angular/core';
import { AgeService } from '../age.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  age = this.ageService.getAge();
  ageString = this.ageService.getAgeString();

  constructor(private ageService: AgeService) { }

  ngOnInit(): void {
  }

}
