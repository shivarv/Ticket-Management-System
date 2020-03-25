import { LightningElement } from 'lwc';
import CONTACT_FIELD from '@salesforce/schema/Case.ContactId';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import TYPE_FIELD from '@salesforce/schema/Case.Type';
import StATUS_FIELD from '@salesforce/schema/Case.Status';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import ASSIGNEDUSER_FIELD from '@salesforce/schema/Case.Assigned_User__c';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';


export default class TMS_NewTicket extends LightningElement {
    objectApiName = 'Case';
    recordTypeId =  '0122v000001qq7bAAA';

    fields = [CONTACT_FIELD, SUBJECT_FIELD, TYPE_FIELD, PRIORITY_FIELD,
                StATUS_FIELD, ORIGIN_FIELD,
                ASSIGNEDUSER_FIELD, DESCRIPTION_FIELD
             ];
    
    
    caseCreated(event) {
        console.log('in caseCreated method ');
        
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        console.log(' fields '+ fields);
        this.template.querySelector('lightning-record-form').submit(fields);
    }
}