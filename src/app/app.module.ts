import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpclientserviceComponent } from './components/httpclientservice/httpclientservice.component';
import { GetservComponent } from './components/getserv/getserv.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ListservComponent } from './components/listserv/listserv.component';
import { TablepaginComponent } from './components/tablepagin/tablepagin.component';

import { HttpserviceService } from './services/httpservice.service';
import { ClickservService } from './services/clickserv.service';
import { ImmediatelyService } from './services/immediately.service';
import { Myintersept } from './services/myintersept.service';
@NgModule({
  declarations: [
    AppComponent,
    HttpclientserviceComponent,
    GetservComponent,
    NavComponent,
    HomeComponent,
    ListservComponent,
    TablepaginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    HttpserviceService,
    ClickservService,
    ImmediatelyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Myintersept,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
