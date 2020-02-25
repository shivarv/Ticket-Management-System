import TMS_ComponentFC from "c/tMS_ComponentFC";
import { LightningElement,api } from 'lwc';

export default class TMS_PageHeader extends TMS_ComponentFC {
    @api chosenTitle;
    constructor() {
        super();
        this.chosenTitle = 'Dashboard';
    }
}