const test8 = getMaxGifts([100, 1, 1], 2, 2)
const test7 = getMaxGifts([100, 1, 5], 2, 2)
const test1 = getMaxGifts([12, 3, 11, 5, 7], 20, 3);
const test2 = getMaxGifts([40, 70, 40], 100, 2)
const test3 = getMaxGifts([40, 70, 40, 60], 100, 2)
const test4 = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)
const test5 = getMaxGifts([40, 70, 40, 30, 30], 100, 2)
const test6 = getMaxGifts([70, 40, 60], 120, 2)
const test9 = getMaxGifts([100, 200, 399], 2, 3)

console.assert(test1 === 20, `[12, 3, 11, 5, 7] must be 20: get: ${test1}`)
console.assert(test2 === 80, `[40, 70, 40] Must be 80 get: ${test2}`)
console.assert(test3 === 100, `[40, 70, 40, 60] Must be 100 get: ${test3}`)
console.assert(test4 === 100, `[50, 10, 40, 1000, 500, 200] Must be 100 get: ${test4}`)
console.assert(test5 === 100, `[40, 70, 40, 30, 30] Must be 100 get: ${test5}`)
console.assert(test6 === 110, `[40, 70, 40, 30, 30] Must be 110 get: ${test6}`)
console.assert(test7 === 1, `[100, 1, 5] Must be 1 get: ${test7}`)
console.assert(test8 === 2, `[100, 1, 1] Must be 2 get: ${test8}`)
console.assert(test9 === 0, `[100, 200, 399] Must be 0 get: ${test9}`)

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let max = giftsCities[0]
  let prevSum = 0
  let countCities = 0

  if (giftsCities[0] > maxGifts && giftsCities.length === 1) return 0
  if (giftsCities.length === 1 && giftsCities[0] <= maxGifts) return giftsCities[0]

  for (let i = 1; i < giftsCities.length && countCities < maxCities; i++) {
    if (max === maxGifts) return max
    if (max + giftsCities[i] > maxGifts) {
      let next = giftsCities[i] + (giftsCities[i + 1] || 0)
      let temp = Math.max(max, prevSum, next <= maxGifts ? next : 0)
      max = (prevSum + giftsCities[i]) < maxGifts ? prevSum + giftsCities[i] : prevSum
      prevSum = temp > maxGifts ? 0 : temp
    } else {
      countCities++
      max = max + giftsCities[i]
      prevSum = max
    }
  }

  const _max = Math.max(max, prevSum)
  return _max <= maxGifts ? _max : Math.min(max, prevSum)
}