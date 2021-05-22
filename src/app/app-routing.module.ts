import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetservComponent } from './components/getserv/getserv.component';
import { HttpclientserviceComponent } from './components/httpclientservice/httpclientservice.component';
import { ListservComponent } from './components/listserv/listserv.component';
import { TablepaginComponent } from './components/tablepagin/tablepagin.component';
import { InterceptrealizComponent } from './components/interceptrealiz/interceptrealiz.component';

const routes: Routes = [
  { path: '', redirectTo: '/getserv', pathMatch: 'full' },
  { path: 'getserv', component: GetservComponent },
  { path: 'httpclientservice', component: HttpclientserviceComponent },
  { path: 'listserv', component: ListservComponent },
  { path: 'tablepagin', component: TablepaginComponent },
  { path: 'intercept', component: InterceptrealizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
