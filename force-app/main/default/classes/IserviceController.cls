public class IServiceController {
    @AuraEnabled(cacheable = true)
    public static String process(ProcessRequestInput input) {
        String className;
        Type classTypeInst;
        ProcessRequestOutput output = new ProcessRequestOutput();
        IService service;
        try {
            className = input.className;
            classTypeInst = Type.forName(className);
            service = (IService) classTypeInst.newInstance();
            if(service != null) {
                service.execute(input, output);
            }
        } catch(Exception e) {
            System.debug(e.getCause());
            System.debug(e.getMessage());
            System.debug(e.getStackTraceString());
            output.outputData  = '';
            output.isError  = true;
            output.errorMessages = e.getMessage().split('\n');
        }
        return JSON.serialize(output);
    }
    /*
    @AuraEnabled(cacheable = true)
    public static string processWithReturn(ProcessRequestInput input) {
        ProcessRequestOutput outputObject = null;
        String className;
        Type classTypeInst;
        IService service;
        try {
            className = input.className;
            classTypeInst = Type.forName(className);
            service = (IService) classTypeInst.newInstance();
            if(service != null) {
                outputObject = service.executeWithReturn(input);
            }
        } catch(Exception e) {
            System.debug(e.getCause());
            System.debug(e.getMessage());
            System.debug(e.getStackTraceString());
        }
        finally {
            outputObject = null;
        }
        return JSON.serialize(outputObject);
    }   */
}