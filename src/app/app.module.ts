import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TimeComponent} from './header/time/time.component';
import {IPComponent} from './header/ip/ip.component';
import {LanguageComponent} from './header/language/language.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './main/body/body.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { AnswersComponent } from './main/body/answers/answers.component';
import { InterviewComponent } from './main/body/interview/interview.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SidebarTopComponent } from './main/sidebar/sidebar-top/sidebar-top.component';
import { SidebarMiddleComponent } from './main/sidebar/sidebar-middle/sidebar-middle.component';
import { SidebarBottomComponent } from './main/sidebar/sidebar-bottom/sidebar-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    IPComponent,
    LanguageComponent,
    HeaderComponent,
    MainComponent,
    BodyComponent,
    SidebarComponent,
    AnswersComponent,
    InterviewComponent,
    SidebarTopComponent,
    SidebarMiddleComponent,
    SidebarBottomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
