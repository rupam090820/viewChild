import { Component, ViewChild } from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchild';
  public d:number|undefined;
  public d2:number|undefined;

  @ViewChild(Comp1Component) data:Comp1Component | undefined;
inc(){
  this.data?.increament();
}
dec(){
  this.data?.decrement();
  this.d=this.data?.num;
  
}
objmethode(){
  let obj=this.data?.productInChild;
  console.log(obj);
}
//public num2=this.data?.num2;

}
