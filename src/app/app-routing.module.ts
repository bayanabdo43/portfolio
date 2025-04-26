import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { AboutComponent } from '../components/about/about.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { WorkComponent } from '../components/work/work.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';

const routes: Routes = [
  {path:"",redirectTo:"HomeComponent",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"experience",component:ExperienceComponent},
  {path:"skills",component:SkillsComponent},
  {path:"work",component:WorkComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
