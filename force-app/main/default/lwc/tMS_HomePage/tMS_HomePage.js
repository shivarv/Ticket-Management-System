import TMS_ComponentFC from 'c/tMS_ComponentFC';
import { LightningElement, track } from 'lwc';

export default class TMS_HomePage extends LightningElement  {
    @track isFullSearchOpen = false;


    handleSearchFocus(event) {
        console.log('handleSearchFocus focus event handler - homepage'+ event.detail);
        this.isFullSearchOpen = true;
    }

    onBlurOfSearchExpanded(event) {
        console.log('onBlurOfSearchExpanded '+ event + "  "+ this.isFullSearchOpen);
        
            this.isFullSearchOpen = false;
        
    }

}