// Get the current date
const currentDate = new Date();

// Calculate the previous year's date
const previousYearDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth() + 1, 2);
console.log(previousYearDate);
// Calculate the Unix timestamp for the previous year's date
const previousYearUnixTimestamp = Math.floor(previousYearDate.getTime() / 1000);

console.log("Previous Year Unix Timestamp = ", previousYearUnixTimestamp);
