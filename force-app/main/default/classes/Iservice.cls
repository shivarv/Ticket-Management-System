public interface IService {
    void execute(ProcessRequestInput input);
    ProcessRequestOutput executeWithReturn(ProcessRequestInput input);

}