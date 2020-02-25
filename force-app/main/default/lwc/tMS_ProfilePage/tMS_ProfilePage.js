import TMS_ComponentFC from 'c/tMS_ComponentFC';
import { LightningElement, api } from 'lwc';

export default class TMS_ProfilePage extends TMS_ComponentFC {
    @api userDetails;

    constructor() {
        this.userDetails = {
            fullName: 'Shiva RV',
            email: 'shivarv@gmail.com',
            mobile: 9125269701,
            jobTitle: 'Support Agent'
        };
    }

}