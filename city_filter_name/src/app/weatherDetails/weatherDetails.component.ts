import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {

  @Input() weatherData: data[];
  cityValue: any;
  temperature: any;
  wind: any;
  humidity: any;
  noRecord: string;
  isShowRes = false;
  ngOnInit() {
    // console.log(weatherData)
  }
  CityEntered(event: any) {
    console.log('event', event.target.value);
    console.log(this.weatherData);
    this.cityValue = event.target.value;
    if(this.cityValue !== ""){
      for (let i = 0; i < this.weatherData.length; i++) {
        if (
          this.weatherData[i]['name'].toLowerCase() ===
          this.cityValue.toLowerCase()
        ) {
          this.temperature = this.weatherData[i]['temperature'];
          this.wind = this.weatherData[i]['wind'];
          this.humidity = this.weatherData[i]['humidity'];
          this.isShowRes = true;
          break;
        } else {
          this.isShowRes = false;
          this.noRecord = 'No Results Found';
        }
      }
    }else {
      this.isShowRes = false;
      this.noRecord = undefined;
    }

  }
}
interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
