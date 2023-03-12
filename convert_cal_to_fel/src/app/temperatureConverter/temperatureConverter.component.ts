import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  fahrenheit: number;
  celsius: number;
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  getChangeCelsius(event) {
    const newC = ((Number(this.fahrenheit) - 32) * (5 / 9));
    this.celsius = newC;
  }

  getChangeFahrenheit(event) {
    const newF = (Number(this.celsius) * (9 / 5) + 32);
    this.fahrenheit = newF;
  }

}
