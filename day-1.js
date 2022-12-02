// Link: https://adventjs.dev/challenges/2022/1

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)

function wrapping(gifts) {
  const wrap = gift => {
    const asterisk = '*'
    const char = asterisk.repeat(gift.length + 2)
    return `${char}\n*${gift}*\n${char}`
  }
  return gifts.map(wrap)
}