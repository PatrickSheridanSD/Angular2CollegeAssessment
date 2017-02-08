import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  title:string = "Question 1"; // title variable for this component
  result:number;
  resultFare:number;
  adultFare:number;
  childFare:number;
  fareChoice:string;

  constructor() { }
 // CalculateDistance method works out the total distance traveled from 3 inputs
  calculateDistance( value1:number, value2:number, value3: number){
      this.result = +value1 + +value2 + +value3;
  }
  // this method bellow gets radio buttom value adult or child choice
  setFare(choice:string){
      if(choice == "adultFare"){
         this.fareChoice = 'adult'; 
      }else if (choice == "childFare"){
        this.fareChoice = 'child';
      }
  }
  // This method below gets CalculateDistance result and setFare result to calculate the cost of travel and display result to user
  calculateFare(){
      if(this.result >= 100 && this.fareChoice == "adult") {
        this.adultFare = 20;
        this.resultFare = this.adultFare 
      }else if(this.result < 100 && this.fareChoice == "adult"){
        this.adultFare = 15;
        this.resultFare = this.adultFare;
      }else if(this.result >= 100 && this.fareChoice == 'child'){
        this.childFare = 10;
        this.resultFare = this.childFare;
      }else if(this.result <100 && this.fareChoice == 'child'){
        this.childFare = 5;
        this.resultFare = this.childFare;
      }
  }

  ngOnInit() {
  }

}
