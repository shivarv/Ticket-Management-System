public with sharing class TicketController implements IService{

    public static void execute(ProcessRequestInput input, ProcessRequestOutput output) {
        System.debug('in TicketController method ' + input);
     //   TMS_WrapperClass.TicketWrapper wrapperObject = (TMS_WrapperClass.TicketWrapper) JSON.deserialize(input.inputData, TMS_WrapperClass.TicketWrapper.class);
     //   System.debug(' wrapperObject  ' +wrapperObject );
    }

/*
    public static ProcessRequestOutput executeWithReturn(ProcessRequestInput input) {
        System.debug('in TicketController method ' + Input);
        ProcessRequestOutput output = new ProcessRequestOutput();
        TMS_WrapperClass.TicketWrapper wrapperObject = (TMS_WrapperClass.TicketWrapper) JSON.deserialize(input.inputData, TMS_WrapperClass.TicketWrapper.class);
        output.outputData = JSON.serialize(wrapperObject);
        output.isError = false;
        output.errorMessages = null;
        return output;
    }
    */

}