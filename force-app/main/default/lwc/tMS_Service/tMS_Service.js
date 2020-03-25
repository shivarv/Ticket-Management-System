const callApexMethod = function(inputDataObject, className, callback) {
    console.log(' call apex method ');
    let requestParameters = {inputData : inputDataObject, className : className};
    let inputData = JSON.stringify(requestParameters); 
    executeApex(inputData).then(data => {
        console.log("data "+ data);
        if(callback) {
            callback(data);
        }
        })
        .catch(error => {
            console.log(error);
        })
}   
export { callApexMethod};
