import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Amazon2Component } from './components/amazon-2/amazon-2.component';
import { AmazonComponent } from './components/amazon/amazon.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BestPracticesItComponent } from './components/best-practices-it/best-practices-it.component';
import { BloombergComponent } from './components/bloomberg/bloomberg.component';
import { ContactComponent } from './components/contact/contact.component';
import { Crc32BitCollisionComponent } from './components/crc-32bit-collision/crc-32bit-collision.component';
import { GofDesignPatternsComponent } from './components/gof-design-patterns/gof-design-patterns.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { StoryComponent } from './components/story/story.component';

@NgModule({
  declarations: [
    Amazon2Component,
    AmazonComponent,
    AppComponent,
    BestPracticesItComponent,
    BloombergComponent,
    ContactComponent,
    Crc32BitCollisionComponent,
    GofDesignPatternsComponent,
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

