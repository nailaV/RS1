import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { DonationComponent } from './donation/donation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    LogInComponent,
    HomeComponent,
    StoriesComponent,
    UserProfileComponent,
    RegistrationComponent,
    StoryDetailsComponent,
    DonationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
