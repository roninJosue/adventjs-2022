console.time('test')
const test10 = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)
console.timeEnd('test')

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let sub = []
  function findSubsets(subset, nums, output, index) {

    // Base Condition
    if (index === nums.length) {
      subset.push(output);
      return;
    }

    // Not Including Value which is at Index
    findSubsets(subset, nums, [...output], index + 1);

    // Including Value which is at Index
    output.push(nums[index]);
    findSubsets(subset, nums, [...output], index + 1);
  }

  findSubsets(sub, giftsCities, [], 0)
  const _sub = sub.filter(s => s.length <= maxCities)

  const ma = _sub.map((cur) => {
   return cur.reduce((a, c) => a + c, 0)
  })

  const _sub2 = ma.filter(s => s <= maxGifts)
  return _sub.length > 0 ? Math.max(..._sub2) : 0
}