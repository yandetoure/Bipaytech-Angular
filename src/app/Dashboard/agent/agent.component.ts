import { Component, HostListener } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //

@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent {
  userName = 'Ndeye Yandé Touré';
  isSidebarCollapsed = false;
  isDropdownOpen = false;
  isNotificationDropdownOpen = false; // Propriété pour contrôler l'état du dropdown de notifications

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
