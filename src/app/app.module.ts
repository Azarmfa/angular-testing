import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ObserverComponent } from './observer/observer.component';
import { HttptestComponent } from './httptest/httptest.component';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';

@NgModule({
  declarations: [AppComponent, ObserverComponent, HttptestComponent, JsonplaceholderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    ButtonModule,
    NgbModule,
    NgbAccordionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
