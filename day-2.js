const year = 2023
const holiday = ['01/06', '04/01', '12/25']

console.log(countHours(year, holiday))

function countHours(year, holidays) {
  return holidays.map(day => new Date(`${year}/${day}`).getDay())
    .filter(day => day !== 0 && day !== 6)
    .reduce((acc, _) => acc + 2, 0)
}