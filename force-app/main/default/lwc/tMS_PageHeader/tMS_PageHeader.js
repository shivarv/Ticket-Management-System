import TMS_ComponentFC from "c/tMS_ComponentFC";
import { LightningElement, api, track } from 'lwc';

export default class TMS_PageHeader extends LightningElement  {
    @api chosenTitle;
    @api isFullSearchOpen = false;
    constructor() {
        super();
        this.chosenTitle = 'Dashboard';
    }

    handleSearchFocus(event) {
       // console.log('handleSearchFocus focus event handler - homepage'+ event.detail);
        //this.isFullSearchOpen = event.detail;
        console.log('In handleSearchFocus Method - pageheader');
       // this.isFullSearchOpen = event.detail;

        const selectedEvent = new CustomEvent('searchfocusparent', { detail: true });
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }

    stopClickPropagation(event) {
        console.log('in handle on click');
        event.stopPropagation();
    }

    fireCloseFullSearchBarEvent(event) {
        console.log('in fire close event in side bar component ');
        const selectedEvent = new CustomEvent('fullsearchclose', { detail: true, bubbles: true, composed: true });
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}