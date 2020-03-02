import TMS_ComponentFC from 'c/tMS_ComponentFC';
import { LightningElement } from 'lwc';

export default class TMS_HomePage extends LightningElement  {
    isFullSearchOpen = false;


    handleSearchFocus(event) {
        console.log('handleSearchFocus focus event handler - homepage'+ event.detail);
        this.isFullSearchOpen = event.detail;
    }

    onBlurOfSearchExpanded(event) {
        console.log('onBlurOfSearchExpanded '+ event);
        if(this.isFullSearchOpen == true) {
            this.isFullSearchOpen = false;
        }
    }

}