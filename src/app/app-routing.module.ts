import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetservComponent } from './components/getserv/getserv.component';
import { HomeComponent } from './components/home/home.component';
import { HttpclientserviceComponent } from './components/httpclientservice/httpclientservice.component';
import { ListservComponent } from './components/listserv/listserv.component';

// const routes: Routes = [];

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'getserv', component: GetservComponent},
  {path: 'httpclientservice', component: HttpclientserviceComponent},
  {path: 'listserv', component: ListservComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
