import EXECUTEAPEX from '@salesforce/apex/IServiceController.process';
//{ "inputData": "{}", "className": "TMS_GetTickets"}'

//inputDataObject is of type object and in this method serialise it to string
const callApexMethod = function( className, inputDataObject, callback) {
    console.log(' call apex method ');
    let requestParameters = {inputData : "", className : className};
    let inputData = JSON.stringify(requestParameters); 
    console.log(inputData);
    EXECUTEAPEX({inputData: inputData}).then(data => {
        console.log("data "+ data);
        if(callback) {
            callback(data);
        }
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        })
}   
export { callApexMethod};
