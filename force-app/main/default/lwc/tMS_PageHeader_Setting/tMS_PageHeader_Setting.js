import { LightningElement, track } from 'lwc';

export default class TMS_PageHeader_Setting extends LightningElement {
    @track isVisible = false;

    expandMenus() {
        this.isVisible = !this.isVisible;
    }
}