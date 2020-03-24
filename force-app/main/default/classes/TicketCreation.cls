public with sharing class TicketCreation implements IService{
    public static void execute(ProcessRequestInput input, ProcessRequestOutput output) {
        System.debug('in TicketController method ' + Input);
        TMS_WrapperClass.TicketWrapper wrapperObject = (TMS_WrapperClass.TicketWrapper) JSON.deserialize(input.inputData, TMS_WrapperClass.TicketWrapper.class);
        System.debug(' wrapperObject  ' +wrapperObject );
    }
}
