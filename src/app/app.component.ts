import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    let d = new DemoComponent();
    console.log(d.sayHello())
  }

  title = 'Project5';
  @ViewChild('dobInput') dob: ElementRef | undefined;
  @ViewChild('ageOutput') age: ElementRef | undefined;
  @ViewChild(DemoComponent, { static: true }) demo: DemoComponent | undefined;

  calculateAge() {
    let birthYear = new Date(this.dob?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    if (this.age) {
      this.age.nativeElement.value = currentYear - birthYear;
    }

  }
}
