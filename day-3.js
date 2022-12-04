// Link https://adventjs.dev/challenges/2022/3

const packOfGifts = ['game', 'videoconsole', 'computer']
const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers)

function distributeGifts(packOfGifts, reindeers) {
  const totalWeight = packOfGifts.join('').length
  const totalCanCarry = reindeers.join('').length * 2
  return Math.floor(totalCanCarry / totalWeight)
}