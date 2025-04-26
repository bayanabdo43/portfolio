import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { AboutComponent } from '../components/about/about.component';
import { WorkComponent } from '../components/work/work.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AboutComponent,
    WorkComponent,
    SkillsComponent,
    ExperienceComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
