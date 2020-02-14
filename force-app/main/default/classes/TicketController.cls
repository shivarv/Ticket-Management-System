public with sharing class TicketController implements IService{
    public TicketController() {

    }

    public static void execute(ProcessRequestInput input) {
        System.debug('in TicketController method ' + Input);
        TMS_WrapperClass.TicketWrapper wrapperObject = (TMS_WrapperClass.TicketWrapper) JSON.deserialize(input.inputData, TMS_WrapperClass.TicketWrapper.class);
        System.debug(' wrapperObject  ' +wrapperObject );
    }

}