import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AmazonComponent } from './components/amazon/amazon.component';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';
import { ContactComponent } from './components/contact/contact.component';
import { BloombergComponent } from './components/bloomberg/bloomberg.component';
import { Amazon2Component } from './components/amazon-2/amazon-2.component';

const appRoutes: Routes = [
	{ path: 'portfolio', component: PortfolioComponent  },
	{ path: 'privacy_policy', component: PrivacyPolicyComponent  },
	{ path: 'amazon', component: AmazonComponent  },
	{ path: '', component: HomeComponent  },
	{ path: 'story', component: StoryComponent  },
	{ path: 'contact', component: ContactComponent  },
	{ path: 'bloomberg', component: BloombergComponent  },
	{ path: 'amazon_2', component: Amazon2Component  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

