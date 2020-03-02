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
        console.log(this.id + ' '+ event.target.id + ' '+ event.currentTarget.id);
        console.log(JSON.stringify(this.id) + ' '+ JSON.stringify(event.target.id) + ' '+ JSON.stringify(event.currentTarget.id));

        if(event.target === this ) {
            console.log('event target  equal to this ');

        }

        if(event.target === event.currentTarget ) {
            console.log('event target  equal to current target ');
            
        }

        if(event.target !== this ) {
            console.log('event target not equal to this ');

        }

        if(event.target !== event.currentTarget ) {
            console.log('event target not equal to current target ');
            
        }
        this.isFullSearchOpen = false;
        
    }

}