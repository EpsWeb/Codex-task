import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.sass']
})
export class IPComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ip;
  isLoaded = false;

  ngOnInit() {
    this.http.get('http://ip.jsontest.com/')
      .subscribe(res => {
        this.ip = res['ip'];
        this.isLoaded = true;
      });
  }

}
