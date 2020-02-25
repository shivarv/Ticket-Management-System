import { LightningElement, api } from 'lwc';

export default class TMS_ProfilePage extends LightningElement {
    @api userDetails;

    constructor() {
        super();
        this.userDetails = {
            fullName: 'Shiva RV',
            email: 'shivarv@gmail.com',
            mobile: 9125269701,
            jobTitle: 'Support Agent'
        };
    }

}