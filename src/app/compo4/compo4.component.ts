import { Component } from '@angular/core';

@Component({
  selector: 'app-compo4',
  templateUrl: './compo4.component.html',
  styleUrls: ['./compo4.component.css']
})
export class Compo4Component {
public roll:number=28;
public course:string='bca'
click(){
  alert('course is:-'+this.course)
}
}
