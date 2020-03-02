import TMS_ComponentFC from "c/tMS_ComponentFC";
import { LightningElement, api, track } from 'lwc';

export default class TMS_PageHeader extends LightningElement  {
    @api chosenTitle;
    @track isFullSearchOpen = false;
    constructor() {
        super();
        this.chosenTitle = 'Dashboard';
    }

    handleSearchFocus(event) {
        console.log('handleSearchFocus focus event handler - homepage'+ event.detail);
        this.isFullSearchOpen = event.detail;
    }
}