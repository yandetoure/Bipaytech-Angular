import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { Component } from '@angular/core';
import { AgentComponent } from './Dashboard/agent/agent.component';
import { SettingsComponent } from './Agent/settings/settings.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'dashboard/agent', component: AgentComponent},
    { path: 'agent/settings', component: SettingsComponent },


  // { path: 'dashboard/agent', component: AgentComponent , canActivate: [AuthGuard], data: { role: 'agent' } },
];
