import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { LoginComponent } from './home/login/login.component';
import { MoodRatingComponent } from './mood-rating/mood-rating.component';
import { AssessmentHistoryComponent } from './assessment-history/assessment-history.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { HappinessDefinitionComponent } from './happy-activities/happiness-definition/happiness-definition.component';
import { LandingComponent } from './landing/landing.component';
import { FullpageDirective } from './shared/directives/fullpage.directive';
import { HomeComponent } from './home/home.component';
import { FaceComponent } from './face/face.component';
import { SatisfactionAssessmentComponent } from './satisfaction-assessment/satisfaction-assessment.component';
import { LandingOptionsComponent } from './landing/landing-options/landing-options.component';
import { HappyListComponent } from './happy-activities/happy-list/happy-list.component';
import { GratitudeExerciseComponent } from './happy-activities/gratitude-exercise/gratitude-exercise.component';
import { SatisfactionAssessmentService } from './shared/assessment-services/satisfaction-assessment.service';
import { SatisfactionResultsService } from './shared/assessment-services/satisfaction-results.service';
import { SatisfactionResultsComponent } from './satisfaction-results/satisfaction-results.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard', component: LandingComponent, children: [
      { path: 'selection', component: LandingOptionsComponent },
      { path: 'assessments/satisfaction-scale', component: SatisfactionAssessmentComponent },
      { path: 'results', component: SatisfactionResultsComponent }
    ]
  },
  // Exercises
  { path: 'defining-happiness', component: HappinessDefinitionComponent },
  { path: 'happy-list', component: HappyListComponent },
  { path: 'gratitude-exercise', component: GratitudeExerciseComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileManagementComponent,
    LoginComponent,
    MoodRatingComponent,
    AssessmentHistoryComponent,
    RegistrationComponent,
    HappinessDefinitionComponent,
    LandingComponent,
    FullpageDirective,
    HomeComponent,
    FaceComponent,
    SatisfactionAssessmentComponent,
    LandingOptionsComponent,
    HappyListComponent,
    GratitudeExerciseComponent,
    SatisfactionResultsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [SatisfactionAssessmentService, SatisfactionResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
