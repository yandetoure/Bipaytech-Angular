import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-invoice',
    standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './upload-invoice.component.html',
  styleUrls: ['./upload-invoice.component.css']
})
export class UploadInvoiceComponent {
  uploadedFile: File | null = null;
  extractedData: any = null;
  isProcessing: boolean = false;
  isPaid: boolean = false;

  // Simule l'upload d'une facture
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
      this.extractInvoiceData();
    }
  }

  // Simulation de l'extraction des données de la facture
  extractInvoiceData() {
    this.isProcessing = true;

    // Simule un traitement OCR (remplace par une API réelle plus tard)
    setTimeout(() => {
      this.extractedData = {
        company: 'CMA CGM',
        address: '123 Rue de la Douane, Dakar, Sénégal',
        clientReference: '777007927',
        invoiceNumber: 'SNIM0641908-451500',
        amount: 451500,
        charges: 4515,
        totalHT: 447000,
        totalTTC: 456015
      };
      this.isProcessing = false;
    }, 2000);
  }

  // Simulation du paiement
  processPayment() {
    this.isProcessing = true;

    setTimeout(() => {
      this.isPaid = true;
      this.isProcessing = false;
    }, 3000);
  }
}
