import { LightningElement, api } from 'lwc';

export default class TMS_PageHeader_Search extends LightningElement {

    constructor() {
        super();
    }
    
    fireSearchFocus() {
        console.log('In fireSearchFocus Method ');
        const selectedEvent = new CustomEvent('searchfocus', { detail: true });
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}