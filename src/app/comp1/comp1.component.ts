import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  public num: number = 0;
  public sms: string | undefined = ''
  //public num2: number = 10;

  increament() {
    this.num = this.num + 1;
    this.sms = 'count is: ';
  }
  decrement() {
    this.num = this.num - 1;
    this.sms = 'count is: ';
  }

  productInChild = [
    {
      ProductId: 1,
      ArtNo: "100",
      Provider:"OppoProvider",
      ProviderArtNo:"1Yu",
      Brand: "Oppo",
      Price: 7810.23,
      BuyAccount: "123",
      SalesAccount: "321"
    },
    {  
      ProductId: 2,  
      ArtNo: "101",  
      Provider: "OppoProvider",  
      ProviderArtNo: "1Yu",  
      Brand: "Oppo",  
      Price: 2310.23,  
      BuyAccount: "123",  
      SalesAccount: "321"  
    },  
    {  
      ProductId: 3,  
      ArtNo: "102",  
      Provider: "OppoProvider",  
      ProviderArtNo: "1Yu",  
      Brand: "Oppo",  
      Price: 7810.23,  
      BuyAccount: "123",  
      SalesAccount: "321"  
    },  
    {  
      ProductId: 4,  
      ArtNo: "103",  
      Provider: "OppoProvider",  
      ProviderArtNo: "1Yu",  
      Brand: "Oppo",  
      Price: 5810.23,  
      BuyAccount: "123",  
      SalesAccount: "321"  
    } 
  ]
  
  
}

