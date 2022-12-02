const year = 2023
const holiday = ['01/06', '04/01', '12/25']

console.log(countHours(year, holiday))

function countHours(year, holidays) {
  const calculateHours = (totalHours, date) => {
    const day = new Date(`${year}/${date}`).getDay()
    return day !== 0 && day !== 6 ? totalHours + 2 : totalHours
  }
  return holidays.reduce(calculateHours, 0)
}