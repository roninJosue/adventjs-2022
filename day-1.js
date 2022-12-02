// Link: https://adventjs.dev/challenges/2022/1

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)

function wrapping(gifts) {
  return gifts.map(gift=>{
    const asterisk = '*'.repeat(gift.length) + '**'
    return `${asterisk}\n*${gift}*\n${asterisk}`
  })
}