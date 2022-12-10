console.time('test')
const test10 = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)
console.log(test10)
console.timeEnd('test')

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let get_bit = function (num, bit) {
    let temp = (1 << bit);
    return (temp & num) === 0 ? 0 : 1;
  };
  let subsets = []
  let get_all_subsets = function (v, sets) {
    let subsets_count = Math.pow(2, v.length);
    for (let i = 0; i < subsets_count; i++) {
      let st = []
      for (let j = 0; j < v.length; j++) {
        if (get_bit(i, j) === 1) {
          st.push(v[j]);
        }
      }
      const subSum = st.reduce((a, c) => a + c, 0)
      if (st.length <= maxCities && subSum <= maxGifts) {
        sets.push(subSum);
      }
    }
  };

  get_all_subsets(giftsCities, subsets)
  return Math.max(...subsets)
}