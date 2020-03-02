import TMS_ComponentFC from 'c/tMS_ComponentFC';

export default class TMS_ContentPage extends TMS_ComponentFC {


    fireCloseFullSearchBarEvent(event) {
        console.log('in fire close event in side bar component ');
        const selectedEvent = new CustomEvent('fullsearchclose', { detail: true, bubbles: true, composed: true });
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}

