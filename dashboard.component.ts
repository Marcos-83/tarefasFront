import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isProjectsOpen: boolean = false;
  isTasksOpen: boolean = false;

  toggleDropdown(menu: string) {
    if (menu === 'projects') {
      this.isProjectsOpen = !this.isProjectsOpen;
    } else if (menu === 'tasks') {
      this.isTasksOpen = !this.isTasksOpen;
    }
  }
}
