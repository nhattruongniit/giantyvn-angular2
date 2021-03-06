import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { BenefitComponent } from './benefit/benefit.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';
import { TermOfUseComponent } from './term-of-use/term-of-use.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about/:alias', component: AboutComponent},
  { path: 'about', component: AboutComponent},
  { path: 'product-service', component: ProductServiceComponent},
  { path: 'product-service/:alias', component: ProductServiceComponent},
  { path: 'strengths', component: StrengthsComponent},
  { path: 'strengths/:alias', component: StrengthsComponent},
  { path: 'benefit', component: BenefitComponent},
  { path: 'jobs', component: JobsComponent},
  { path: 'jobs/:alias', component: JobsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'term-of-use', component: TermOfUseComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}