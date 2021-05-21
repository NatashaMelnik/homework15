import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpclientserviceComponent } from './components/httpclientservice/httpclientservice.component';
import { GetservComponent } from './components/getserv/getserv.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ListservComponent } from './components/listserv/listserv.component';

import { HttpserviceService } from './services/httpservice.service';
import { ClickservService } from './services/clickserv.service';
import { ImmediatelyService } from './services/immediately.service';
@NgModule({
  declarations: [
    AppComponent,
    HttpclientserviceComponent,
    GetservComponent,
    NavComponent,
    HomeComponent,
    ListservComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpserviceService,
    ClickservService,
    ImmediatelyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
