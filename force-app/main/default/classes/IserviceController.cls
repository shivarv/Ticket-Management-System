public class IServiceController {
    public static void process(ProcessRequestInput input) {
        String className;
        Type classTypeInst;
        IService service;
        try {
            className = input.className;
            classTypeInst = Type.forName(className);
            service = (IService) classTypeInst.newInstance();
            if(service != null) {
                service.execute(input);
            }
        } catch(Exception e) {
            System.debug(e.getCause());
            System.debug(e.getMessage());
            System.debug(e.getStackTraceString());
        }
    }

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
    }
}