import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  title:string = "Question 3 "
  message1:string;
  message2:string;
  message3:string;
  heightSquared:number;
  bmi:number;


  constructor() { }
    // calculateBMI takes the input from weight and height, calculates height square, calculates BMI and them displays the 3 messages
  calculateBMI(height:number, weight:number){
      this.message1 = "Your height is " +height;
      this.message2 = "Your weight is " +weight;
      this.heightSquared = height * height;
      this.bmi = weight / this.heightSquared;
      this.message3 = "Your BMI is " +this.bmi;
  }

  ngOnInit() {
  }

}
