import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.sass']
})
export class LanguageComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  language;
  isLoaded = false;

  ngOnInit() {
    this.http.get('http://headers.jsontest.com/')
      .subscribe(res => {
        this.language = res['Accept-Language'].substring(0, 5);
        this.isLoaded = true;
      });
  }

}
























