import { LightningElement } from 'lwc';

export default class TMS_ContentPage_UserSearch extends LightningElement {
    
    
    searchRecords(event) {
        console.log('in search record components '+event.target.value);
    }

}