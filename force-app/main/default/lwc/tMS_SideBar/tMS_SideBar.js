import { LightningElement, api } from 'lwc';
export default class TMS_SideBar extends LightningElement  {
    @api isFullSearchOpen;

    menuItemsList = ['Dashboard', 'Tickets','Contacts','Solutions','Bots'];

    fireCloseFullSearchBarEvent(event) {
        console.log('in fire close event in side bar component ');
        const selectedEvent = new CustomEvent('fullsearchclose', { detail: true, bubbles: true, composed: true });
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}