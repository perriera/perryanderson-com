import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Amazon2Component } from './components/amazon-2/amazon-2.component';
import { AmazonComponent } from './components/amazon/amazon.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BloombergComponent } from './components/bloomberg/bloomberg.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { StoryComponent } from './components/story/story.component';

@NgModule({
  declarations: [
    Amazon2Component,
    AmazonComponent,
    AppComponent,
    BloombergComponent,
    ContactComponent,
    HomeComponent,
    PortfolioComponent,
    PrivacyPolicyComponent,
    StoryComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [
    {'useValue':'/','provide':'APP_BASE_HREF'},
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }

