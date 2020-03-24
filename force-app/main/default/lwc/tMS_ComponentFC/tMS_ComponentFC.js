/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { LightningElement } from 'lwc';
import executeApex from '@salesforce/apex/IServiceController.process';

export default class TMS_ComponentFC extends LightningElement {
   
   
    hello(event) {
        console.log("in hello world ");
        
        let requestParameters = {inputData : {assigned_User__c: "user", issue_Type__c: "Hardware", status__c: "New", ticket_heading__c: "sample heading", ticketDetails__c: "details"}, className : "TMS_WrapperClass.TicketWrapper"};
        let inputData = JSON.stringify(requestParameters); 
        executeApex(inputData).then(data => {
            console.log("data "+ data);
            })
            .catch(error => {
                console.log(error);
            })
        this.setDefaultValues();
    }
    
    callApexMethod(inputDataObject, className) {
        console.log(' call apex method ');
        let requestParameters = {inputData : inputDataObject, className : className};
        let inputData = JSON.stringify(requestParameters); 
        executeApex(inputData).then(data => {
            console.log("data "+ data);
            })
            .catch(error => {
                console.log(error);
            })
        this.setDefaultValues(); 

    }   
}