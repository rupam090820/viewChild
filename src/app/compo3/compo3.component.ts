import { Component,ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { Compo4Component } from '../compo4/compo4.component';
@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.css']
})
export class Compo3Component implements AfterViewInit{
public roll!:number;

@ViewChild('n') name!:ElementRef;
@ViewChild(Compo4Component) compo4!:Compo4Component;
ngAfterViewInit(): void {
  console.log(this.name)
    this.name.nativeElement.value ='rupam';
    this.name.nativeElement.style.backgroundColor="pink";
    this.name.nativeElement.classList='myclass'
}
changecourse(){
this.compo4.course="Angular"  // change child property
this.roll=this.compo4.roll;  // access child property
//console.log(this.roll)
}

callchildMethode(){
  this.compo4.click();
}
}
