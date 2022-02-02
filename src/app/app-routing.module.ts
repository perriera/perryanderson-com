import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestPracticesItComponent } from './components/best-practices-it/best-practices-it.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { HomeComponent } from './components/home/home.component';
import { GofDesignPatternsComponent } from './components/gof-design-patterns/gof-design-patterns.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GofAbstractFactoryPatternComponent } from './components/gof-abstract-factory-pattern/gof-abstract-factory-pattern.component';
import { AmazonComponent } from './components/amazon/amazon.component';
import { StoryComponent } from './components/story/story.component';
import { ContactComponent } from './components/contact/contact.component';
import { BloombergComponent } from './components/bloomberg/bloomberg.component';
import { Amazon2Component } from './components/amazon-2/amazon-2.component';
import { Crc32BitCollisionComponent } from './components/crc-32bit-collision/crc-32bit-collision.component';

const appRoutes: Routes = [
	{ path: 'best_practices_it', component: BestPracticesItComponent  },
	{ path: 'privacy_policy', component: PrivacyPolicyComponent  },
	{ path: '', component: HomeComponent  },
	{ path: 'gof_design_patterns', component: GofDesignPatternsComponent  },
	{ path: 'portfolio', component: PortfolioComponent  },
	{ path: 'gof_abstract_factory_pattern', component: GofAbstractFactoryPatternComponent  },
	{ path: 'amazon', component: AmazonComponent  },
	{ path: 'story', component: StoryComponent  },
	{ path: 'contact', component: ContactComponent  },
	{ path: 'bloomberg', component: BloombergComponent  },
	{ path: 'amazon_2', component: Amazon2Component  },
	{ path: 'crc_32bit_collision', component: Crc32BitCollisionComponent  },
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

