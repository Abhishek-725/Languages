const moment = require('moment');

// const myDate = moment();
// console.log(myDate);
// Convert the Moment.js date object to a Unix timestamp
// const unixTimestamp = myDate.unix();

// console.log(unixTimestamp);



const currentDate = moment();
console.log(currentDate.date());
const previousYearDate = currentDate.subtract(11, 'months').subtract(currentDate.date() - 1,'days').unix();
// console.log("currentDate = ",previousYearDate.format('YYYY-MM-DD'));
console.log("currentDate = ",previousYearDate);
const currDate = moment().unix();
console.log(currDate);
console.log(currDate.toLocaleString());
// const whereClause = {
//     'creation_date': {
//       [Op.between] : [
//             previousYearDate,
//             currDate
//       ]
//       },
//     };
// console.log(whereClause);