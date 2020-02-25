import { LightningElement } from 'lwc';

export default class TMS_ListOfMenus extends LightningElement {
  menuItemsList = ['New Ticket', 'New Email', 'New Contact', 'New Company'];
  isVisible = false;
  expandMenus() {
    this.isVisible = !this.isVisible;
  }


}