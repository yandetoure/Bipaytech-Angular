import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { Component } from '@angular/core';
import { AgentComponent } from './Dashboard/agent/agent.component';
import { SettingsComponent } from './Agent/settings/settings.component';
import { AuthGuard } from './auth.guard';
import { InvoicesComponent } from './Agent/invoices/invoices.component';
import { ClientsListComponent } from './Agent/clients-list/clients-list.component';
import { InvoiceDetailComponent } from './Agent/invoice-details/invoice-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'dashboard/agent', component: AgentComponent},
    { path: 'agent/settings', component: SettingsComponent },
    { path: 'agent/invoices', component: InvoicesComponent },
    { path: 'clients/list', component: ClientsListComponent },
    { path: 'invoice/details', component:   InvoiceDetailComponent  }

  // { path: 'dashboard/agent', component: AgentComponent , canActivate: [AuthGuard], data: { role: 'agent' } },
];
