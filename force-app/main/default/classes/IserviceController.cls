public class IserviceController  {
    public static void process(ProcessRequestInput input) {
        String className = input.className;
        Type classTypeInst = Type.forName(className);
        Iservice service = (Iservice) classTypeInst.newInstance();
        if(service != null) {
            service.execute(input);
        }
    }
}
