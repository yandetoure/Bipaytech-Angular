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
  step = 1; 
  progress = 25; // Barre de progression (1/4 = 25%)
  uploadedFile: File | null = null;
  extractedData: any = null;
  isProcessing: boolean = false;
  isPaid: boolean = false;
  paymentDate: string | null = null; 

  // Étape 1 : Upload du fichier
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
      this.nextStep();
      this.extractInvoiceData();
    }
  }

  // Étape 2 : Simulation de l'extraction des données
  extractInvoiceData() {
    this.isProcessing = true;
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

  // Étape 3 : Simulation du paiement
  processPayment() {
    this.isProcessing = true;
    this.nextStep();

    setTimeout(() => {
      this.isPaid = true;
      this.isProcessing = false;
      this.paymentDate = new Date().toLocaleString(); 
      this.nextStep();
    }, 3000);
  }

  // Passer à l’étape suivante
  nextStep() {
    if (this.step < 4) {
      this.step++;
      this.progress += 25; // Mise à jour de la barre de progression
    }
  }

  // Retour à l’étape précédente
  goBack() {
    if (this.step > 1) {
      this.step--;
      this.progress -= 25; 
    }
  }
}