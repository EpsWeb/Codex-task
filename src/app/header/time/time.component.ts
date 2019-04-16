import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.sass']
})
export class TimeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  time;
  isLoaded = false;

  ngOnInit() {
    setInterval(() => {
      this.http.get('http://time.jsontest.com/')
        .subscribe(res => {
          this.time = res['time'].substring(0, 8);
          this.isLoaded = true;
        });
    }, 1000);

  }

}





























