public class IServiceController  {
    public static void process(ProcessRequestInput input) {
        String className = input.className;
        Type classTypeInst = Type.forName(className);
        IService service = (IService) classTypeInst.newInstance();
        if(service != null) {
            service.execute(input);
        }
    }
}