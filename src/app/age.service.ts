import { Injectable } from '@angular/core';
import { Age } from './age.model';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  birthDate: Date = new Date(2006, 12, 6, 0, 0, 0, 0);

  age: Age = new Age(
    new Date(Date.now()).getFullYear() - this.birthDate.getFullYear(), // years
    new Date(Date.now()).getMonth() - this.birthDate.getMonth(), // months
    new Date(Date.now()).getDate() - this.birthDate.getDate() // days
  )

  constructor() { }

  getAge(): Age {
    return this.age;
  }

  getAgeString(): string {
    return this.age.toString();
  }

}
