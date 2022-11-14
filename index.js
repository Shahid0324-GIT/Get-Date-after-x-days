var addDays = require("date-fns/addDays");
function newDate(days) {
  return addDays(new Date(2020, 07, 22), days);
}

module.exports = newDate;
