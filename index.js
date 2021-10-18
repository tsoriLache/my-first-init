let moment = require('moment');
function timeToNow(dateArr){
    let now =moment();
    return now.diff(dateArr,'minutes'); 
    
}

console.log(timeToNow([2007, 5, 29]))