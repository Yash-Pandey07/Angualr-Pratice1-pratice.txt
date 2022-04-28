import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
const MaterialComponents=[MatButtonModule];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    NoPageComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialComponents,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  exports:[MaterialComponents],
  bootstrap: [AppComponent]
})
export class AppModule { }
