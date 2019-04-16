import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar-bottom',
  templateUrl: './sidebar-bottom.component.html',
  styleUrls: ['./sidebar-bottom.component.sass']
})
export class SidebarBottomComponent {

  isShare1Visible = false;
  isShare2Visible = false;

  toggleShare1() {
    this.isShare1Visible = !this.isShare1Visible;
    this.isShare2Visible = this.isShare1Visible ? false : this.isShare2Visible;
  }

  toggleShare2() {
    this.isShare2Visible = !this.isShare2Visible;
    this.isShare1Visible = this.isShare2Visible ? false : this.isShare1Visible;
  }

}
