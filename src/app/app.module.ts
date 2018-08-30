import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HomeComponent } from './components/home/home.component';
import { LeetcodeComponent } from './components/leetcode/leetcode.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CodeFromFileComponent } from './components/code-from-file/code-from-file.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogpostComponent } from './components/blogpost/blogpost.component';
import { BlogtestpostComponent } from './components/blogtestpost/blogtestpost.component';

import { GlobalsService } from './services/globals/globals.service';
import { HighlightService } from './services/hilghlight/highlight.service';
import { SingleblogpostComponent } from './components/singleblogpost/singleblogpost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
    HomeComponent,
    LeetcodeComponent,
    CarouselComponent,
    CodeFromFileComponent,
    BlogComponent,
    BlogpostComponent,
    BlogtestpostComponent,
    SingleblogpostComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    GlobalsService,
    HighlightService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
