let moment = require('moment');
function timeToNow(dateArr){
    let now =moment();
    console.log(now)
    return now.diff(dateArr,'minutes'); 
}

function  TimeFromAToB(date1,date2){
    return moment(date1).diff(date2,'minutes');
}

function daysInMonth(date,format){
    const dateObj =  moment(date,format).toObject();
    console.log(`${dateObj.years}-${dateObj.months}`)
    // ,dateObj,moment(`${dateObj.years}-${dateObj.months}`,"YYYY-MM").daysInMonth()) 

}
// console.log(timeToNow([2008, 5, 29]))
// console.log(TimeFromAToB([2007, 5, 29],[2007, 3, 29]))
console.log(daysInMonth("02-25-1995", "MM-DD-YYYY"))
