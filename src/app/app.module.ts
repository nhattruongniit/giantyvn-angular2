import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing
import { AppRoutingModule } from './app.routing';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { BenefitComponent } from './benefit/benefit.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { FormJoinComponent } from './form-join/form-join.component';
import { TermOfUseComponent } from './term-of-use/term-of-use.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductServiceComponent,
    StrengthsComponent,
    BenefitComponent,
    JobsComponent,
    ContactComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    FormJoinComponent,
    TermOfUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
