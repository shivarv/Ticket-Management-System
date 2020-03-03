import { LightningElement,api } from 'lwc';

export default class TMS_ContentPage_Ticket extends LightningElement {
    @api contactName;
    @api subject;
    @api ticketStatus; // Open , Pending, Resolved, Closed, Waiting Customer Input
    @api ticketPriotity; // Low, Medium, High, Urgent
    @api currentTicketUpdate;//created date, closed date, overdue date , created 13days ago.overdue by 11days, closed 5days ago
   
    getFirstLetter() {

    }
}