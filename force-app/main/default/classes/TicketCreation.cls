public with sharing class TicketCreation implements IService{
    public static void execute(ProcessRequestInput input, ProcessRequestOutput output) {
        System.debug('in TicketController method ' + Input);
        Case newCase = (Case) JSON.deserialize(input.inputData, Case.class);
        insert newCase;
    }
}
