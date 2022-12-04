// Link https://adventjs.dev/challenges/2022/2

const year = 2023
const holiday = ['01/06', '04/01', '12/25']

console.log(countHours(year, holiday))

function countHours(year, holidays) {
  const calculateHours = (totalHours, date) => {
    const day = new Date(`${year}/${date}`).getDay()
    const isDayOfWeek = day !== 0 && day !== 6
    return isDayOfWeek ? totalHours + 2 : totalHours
  }
  return holidays.reduce(calculateHours, 0)
}