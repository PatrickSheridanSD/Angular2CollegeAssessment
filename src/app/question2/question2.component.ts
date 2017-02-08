import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

  title:String = "Question 2"
  convertedTemp:number;
  convertedTempFrom:string;
  convertedTempTo:string;


  constructor() { }

  //The following method works out which radio button was pressed and assigns variable with correct values
  tempChoice(myConversionChoice:string){
      if(myConversionChoice == "celsiusToFahrenheit"){
      this.convertedTempFrom = "Celsius";
      this.convertedTempTo = "Fahrenheit";
      }else if(myConversionChoice == "fahrenheitToCelcius"){
        this.convertedTempFrom = "Fahrenheit";
        this.convertedTempTo = "Celsius";
      }
  }
  // The following method does the calculation for converted temp and assigns resulting variable
  convertTemp(temp:number){
    if(this.convertedTempFrom == "Celsius"){
        this.convertedTemp = ((temp * 9)/5) + 32;
    }else if(this.convertedTempFrom == "Fahrenheit"){
      this.convertedTemp = ((temp - 32)*5)/9;
    }

  }

  ngOnInit() {
  }

}
