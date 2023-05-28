import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements AfterViewInit {
  @ViewChild('dateinput') dateInput: ElementRef | undefined;
  @ViewChild('ageinput') ageInput!: ElementRef;

ngAfterViewInit(): void {
  // this.ageInput.nativeElement.value=500; // by using element reference we can manipulate dom
}
  calculateage() {
    //console.log(this.dateInput);
    //console.log(this.ageInput);
    let selectyear = new Date(this.dateInput?.nativeElement.value).getFullYear();
    let currentyear = new Date().getFullYear();
    let age = currentyear - selectyear;
    console.log(age);
    this.ageInput.nativeElement.value=age;
  }
}
