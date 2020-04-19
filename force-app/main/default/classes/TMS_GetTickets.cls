public with sharing class TMS_GetTickets implements IService {
    public void execute(ProcessRequestInput input, ProcessRequestOutput output) {
        List<Case> allCases = [ SELECT id, Type,
                    Priority, Origin, Reason, Subject, Description, 
                    Contact.id, Contact.name,Product__c, SLAViolation__c, issue_Type__c,
                    potentialLiability__c, engineeringReqNumber__c, assigned_User__c
                    FROM Case LIMIT 50000
        ];

        output.outputData =  JSON.serialize(output);
    }

}
