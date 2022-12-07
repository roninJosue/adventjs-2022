const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

getMaxGifts(giftsCities, maxGifts, maxCities)

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let max = giftsCities[0]
  let prevSum = 0

  if (giftsCities[0] > maxGifts) return 0
  if (giftsCities.length === 1 && giftsCities[0] <= maxGifts) return giftsCities[0]

  for (let i = 1; i < giftsCities.length; i++) {
    let temp = Math.max(max, prevSum)
    max = prevSum + giftsCities[i]
    prevSum = temp
  }

  console.log(max, prevSum)
}