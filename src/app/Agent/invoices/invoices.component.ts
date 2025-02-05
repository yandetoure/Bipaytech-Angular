import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Component, HostListener } from '@angular/core';
import { NgModule } from '@angular/core';

interface Invoice {
  companyName: string;
  reference: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {

  userName = 'Ndeye Yandé Touré';
  isSidebarCollapsed = false;
  isDropdownOpen = false;
  isNotificationDropdownOpen = false; // Propriété pour contrôler l'état du dropdown de notifications

  invoices: Invoice[] = [
    { companyName: 'Entreprise A', reference: 'FAC-001', amount: 150000, date: '2025-01-15' },
    { companyName: 'Entreprise B', reference: 'FAC-002', amount: 200000, date: '2025-01-20' },
    { companyName: 'Entreprise C', reference: 'FAC-003', amount: 100000, date: '2025-01-22' },
    { companyName: 'Entreprise D', reference: 'FAC-004', amount: 300000, date: '2025-01-25' },
    { companyName: 'Entreprise E', reference: 'FAC-005', amount: 250000, date: '2025-01-30' },
  ];

  searchTerm: string = '';
  filterDate: string = '';
  filterAmount: number | null = null;

  filteredInvoices(): Invoice[] {
    return this.invoices.filter(invoice => {
      const matchesSearch = invoice.companyName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesDate = this.filterDate ? invoice.date === this.filterDate : true;
      const matchesAmount = this.filterAmount ? invoice.amount <= this.filterAmount : true;
      return matchesSearch && matchesDate && matchesAmount;
    });
  }

  addInvoice() {
    // Logique pour ajouter une facture
    console.log('Ajout d\'une nouvelle facture');
  }


    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  
    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown')) {
        this.isDropdownOpen = false; // Fermer le dropdown si on clique en dehors
        this.isNotificationDropdownOpen = false; // Fermer le dropdown de notifications si on clique en dehors
      }
    }
}
