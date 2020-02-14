/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { LightningElement } from 'lwc';
import executeApex from '@salesforce/apex/IServiceController.execute';
import executeApexWithReturn from '@salesforce/apex/IServiceController.execute';

export default class TMS_ComponentFC extends LightningElement {
   
   
    hello(event) {
        console.log("in hello world ");

        let requestParameters = {inputData : {assigned_User__c: "user", issue_Type__c: "Hardware", status__c: "New", ticket_heading__c: "sample heading", ticketDetails__c: "details"}, className : "TMS_WrapperClass.TicketWrapper"};

         
        let inputData = JSON.stringify(requestParameters); 
        executeApexWithReturn(inputData).then(data => {
            console.log("data "+ data);
            })
            .catch(error => {
                console.log(error);
            })
        this.setDefaultValues(); 
    }
}