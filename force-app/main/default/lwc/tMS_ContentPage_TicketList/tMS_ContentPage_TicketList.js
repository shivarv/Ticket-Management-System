import { LightningElement } from 'lwc';

export default class TMS_ContentPage_TicketList extends LightningElement {
  
    ticketList = [];
    constructor() {
        super();
        this.ticketList = [];
        this.ticketList.push({id : 1, contactName: 'Raj', subject: 'Connecting issue in laptop',
            currentTicketUpdate : 'closed on time . resolution on time',
            ticketStatus: 'Open',
            ticketPriotity: 'Low'
        });

        this.ticketList.push({id : 2 ,contactName: 'Vis', subject: 'New Keyboard',
            currentTicketUpdate: 'Agent Responded .  Overdue by 8 days',
            ticketStatus: 'Open',
            ticketPriotity: 'Medium'
        });
    }

}