const giftsCities = [40, 70, 40]
const maxGifts = 100
const maxCities = 2

console.log(getMaxGifts(giftsCities, maxGifts, maxCities))

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let max = giftsCities[0]
  //let prevSum = 0
  let countCities = 0

  if (giftsCities[0] > maxGifts) return 0
  if (giftsCities.length === 1 && giftsCities[0] <= maxGifts) return giftsCities[0]

  for (let i = 1; i < giftsCities.length && countCities < maxCities; i++) {
    if (max === maxGifts) return max
    if (max + giftsCities[i] > maxGifts) {
      //countCities++
      max = Math.max(max, giftsCities[i]) > maxGifts ? max : Math.max(max, giftsCities[i])
    } else {
      countCities++
      max = max + giftsCities[i]
    }
  }

  console.log(`max:${max}`)
  return max
}