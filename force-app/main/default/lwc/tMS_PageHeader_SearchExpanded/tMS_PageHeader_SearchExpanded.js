import { LightningElement } from 'lwc';

export default class TMS_PageHeader_SearchExpanded extends LightningElement {
    menuItemsList = ['All', 'Tickets', 'Contacts', 'Solutions', 'Forums'];
    handleTextInput(event) {
        console.log('on text change '+event.target.value);
    }

   
}