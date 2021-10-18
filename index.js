let moment = require('moment');
function timeToNow(dateArr){
    let now =moment();
    console.log(now)
    return now.diff(dateArr,'minutes'); 
}

function  TimeFromAToB(date1,date2){
    return moment(date1).diff(date2,'minutes');
}
console.log(timeToNow([2008, 5, 29]))
console.log(TimeFromAToB([2007, 5, 29],[2007, 3, 29]))