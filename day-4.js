/*const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]*/
const surface = ({l, w, h}) => {
  return l * h * w
}

const boxes = [
  {l: 1, w: 1, h: 1},
  {l: 2, w: 2, h: 2},
  {l: 2, w: 10, h: 2}
]

fitsInOneBox(boxes)

function fitsInOneBox(boxes) {
  let biggerBox = boxes[0]
  let fits = 1
  for (let i = 1; i < boxes.length; i++) {
    const {l: l1, w: w1, h: h1} = boxes[i]
    const {l, w, h} = biggerBox
    if (l < l1 && w < w1 && h < h1) {
      biggerBox = boxes[i]
      fits++
    }else fits++
  }

  console.log(fits)
  console.log(fits === boxes.length)

  return fits === boxes.length
}