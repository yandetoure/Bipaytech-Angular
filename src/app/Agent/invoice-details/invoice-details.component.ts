import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-details',
    standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailComponent {
  invoice = {
    number: '44',
    date: '13/12/2024',
    client: {
      name: 'Papis Gueye',
      company: 'Sope Bamba Transit SARL',
      clientNumber: '777007927'
    },
    transaction: {
      reference: '349989302',
      date: '11 décembre 2024 à 15h18min',
      type: 'CMA CGM',
      invoiceReference: 'SNIM0641908-451500'
    },
    items: [
      { description: 'PAIEMENT FACTURE CMA', quantity: 1, unitPrice: 451500, total: 451500 }
    ],
    subtotal: 451500,
    fees: 4515,
    total: 456015,
    paid: 456015
  };
}
