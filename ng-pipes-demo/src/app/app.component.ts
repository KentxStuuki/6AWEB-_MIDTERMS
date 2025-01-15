import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// Built-in Pipes
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-pipes-demo';
  presentDate = new Date();
  time$ = interval(1000).pipe(
    map(() => Date())
  )
  testObject = {
    name: 'Mark Erolle D. Quiambao',
    age: 20,
    food: 'Adobo'
  }
  price : number = 20000; ngOnInit() {}
  Fruits = ["Apple", "Orange", "Grapes","Mango", "Kiwi", "Pomegranet"]
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
 }
