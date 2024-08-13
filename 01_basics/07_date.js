// let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toDateString);
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toString());

let myCreateDate = new Date(2023 ,5, 23)
console.log(myCreateDate);

// There are nine ways to create new method
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

console.log(myCreateDate.getTimezoneOffset());
console.log(myCreateDate.getUTCFullYear());
console.log(myCreateDate.toISOString());
console.log(myCreateDate.getMilliseconds());
console.log(myCreateDate.toJSON());





