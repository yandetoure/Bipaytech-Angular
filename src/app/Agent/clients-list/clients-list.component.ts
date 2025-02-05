import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

interface Client {
  name: string;
  email: string;
  phone: string;
  company: string;
  number?: string; // Ajoutez le numéro client si nécessaire
  amount?: number; 
}

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {

  clients: Client[] = [
    { name: 'Alice Dupont', email: 'alice@example.com', phone: '123-456-7890', company: 'Entreprise A' },
    { name: 'Bob Martin', email: 'bob@example.com', phone: '234-567-8901', company: 'Entreprise B' },
    { name: 'Chloé Durand', email: 'chloe@example.com', phone: '345-678-9012', company: 'Entreprise C' },
    { name: 'David Leroy', email: 'david@example.com', phone: '456-789-0123', company: 'Entreprise D' },
    { name: 'Emma Moreau', email: 'emma@example.com', phone: '567-890-1234', company: 'Entreprise E' },
  ];

  searchTerm: string = '';
  clientNumberFilter: string = '';
  amountFilter: number | null = null; // Pour le montant, utilisez un nombre ou null

  filteredClients() {
    return this.clients.filter(client => {
      const matchesName = client.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesNumber = this.clientNumberFilter ? client.number?.includes(this.clientNumberFilter) : true; // Filtre de numéro client
      const matchesAmount = this.amountFilter !== null ? client.amount === this.amountFilter : true; // Filtre de montant

      return matchesName && matchesNumber && matchesAmount;
    });
  }

  addClient() {
    // Implémentez la logique pour ajouter un client
    alert('Ajout d\'un nouveau client (à implémenter)');
  }
}