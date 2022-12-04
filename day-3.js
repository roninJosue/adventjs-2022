// Link https://adventjs.dev/challenges/2022/3

const packOfGifts = ['game', 'videoconsole', 'computer']
const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers)

function distributeGifts(packOfGifts, reindeers) {
  const totalWights = packOfGifts.reduce((total, pack) => total + pack.length, 0)
  const totalCanCarry = reindeers.reduce((total, reindeer) => total + (reindeer.length * 2), 0)

  return Math.floor(totalCanCarry / totalWights)
}