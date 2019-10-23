let count = 0
let heavier

// This is an array of the bags weights
let weights = [...Array(100)]

// Weight of the 99 bags
let weight = Math.floor(Math.random() * 100) + 1
weights.fill(weight)

// Weight of the odd bag out (can be either heavier or lighter)
let otherBagWeight = uniqueRandomNumber(weight)

// Add the bag to a random loacation 
weights[Math.floor(Math.random() * 50) + 50] = otherBagWeight  // only having partial values until building out the rest of simulation
console.log('\x1b[35m', `other weight: ${otherBagWeight}`, '\x1b[0m')
console.log('\x1b[35m', `actual weight: ${weight}`, '\x1b[0m')

let bagDetails = weights.map((weight, i) => {
  return {
    bagNumber: i + 1,
    weight: weight
  }
})

function uniqueRandomNumber(currNum) {
  let randomNum = Math.floor(Math.random() * 100) + 1
  while (randomNum === currNum) {
    randomNum = Math.floor(Math.random() * 100) + 1
  }
  return randomNum
}

function getTotalWeight(arr) {
  return arr.reduce((prev, cur) => {
    return prev + cur.weight
  }, 0)
}

function chunk(array, size) {
  const chunkedArr = []
  let index = 0
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index))
    index += size
  }
  return chunkedArr
}

function bagComparison(bagArr1, bagArr2) {
  count++
  let compare = {}
  if (getTotalWeight(bagArr1) === getTotalWeight(bagArr2)) {
    compare.equals = true
  } else {
    compare.equals = false
    if (getTotalWeight(bagArr1) > getTotalWeight(bagArr2)) {
      compare.heavier = bagArr1
      compare.lighter = bagArr2
      compare.firstHeavier = true
    } else {
      compare.heavier = bagArr2
      compare.lighter = bagArr1
      compare.firstHeavier = false
    }
  }
  return compare
}

function answerStatement(uniqueBag, genericBag) {
  console.log('\x1b[36m', `WE FOUND THE BAG!! Bag# ${uniqueBag.bagNumber} weights ${uniqueBag.weight} lbs, where as the other bags weight ${genericBag.weight} lbs`, '\x1b[0m')

  if (uniqueBag.weight === otherBagWeight) {
    console.log('\x1b[32m', `Unique Matches`, '\x1b[0m')
  } else {
    console.log('\x1b[31m', `Unique DOES NOT match`, '\x1b[0m')
  }

  if (genericBag.weight === weight) {
    console.log('\x1b[32m', `Generic weight Matches`, '\x1b[0m')
  } else {
    console.log('\x1b[31m', `Generic Weight DOES NOT match`, '\x1b[0m')
  }

}


// Problem begins here
/*
  You have 50 bags of coins, 1 weighs more or less than the others.
  You have a balancing scale that can tell if there is a difference between the two sides.
  How do you determine which bag weighs a different amount in the least amount of weighs.
*/

// Start by splitting the coins into 4 groups of 25, you can eliminate the 50 from the group where they weigh the same
let chunkedArr = chunk(bagDetails, 25)
// console.log('\x1b[33m', `${JSON.stringify(chunkedArr)}`, '\x1b[0m')  // print if you want to confirm data


// Split into 4 Groups of 25
let twentyFiveBags = chunk(bagDetails, 25)

// Compare the first two 25s
if (bagComparison(twentyFiveBags[0], twentyFiveBags[1]).equals) { // We know these two sets can be eliminated
  // We know that one of the other bags are differnet
  // We are going to compare one of the groups from what we just measured with one of the other two
  if (bagComparison(twentyFiveBags[0], twentyFiveBags[2]).equals) { // We know it's the last set
    //compare the last set to one of the first three to determine if it's heavier or lighter
    let comparison = bagComparison(twentyFiveBags[3], twentyFiveBags[0])
    heavier = comparison.firstHeavier

    // We now have 25 bags, that we'll split up into 12, 12, and 1
    let twelveBags = chunk(heavier ? comparison.heavier : comparison.lighter, 12)
    // We will now compare the two sets of 12
    let twelveCompare = bagComparison(twelveBags[0], twelveBags[1])

    // If they are equal, the one left over is our answer - else we have to continue comparing
    if (twelveCompare.equals) {
      answerStatement(twelveBags[2][0], twelveBags[0][0])
    } else { // we can split the 12 (lighter or heavier based on variable into 6s)
      let sixBags = chunk(heavier ? twelveCompare.heavier : twelveCompare.lighter, 6)
      let sixCompare = bagComparison(sixBags[0], sixBags[1])
      // one set has to be heavier than the other - determine the next three to test
      let threeBags = chunk(heavier ? sixCompare.heavier : sixCompare.lighter, 3)
      let threeCompare = bagComparison(threeBags[0], threeBags[1])
      // check two of the three bags, if they equal you have your answer else you have one more compare
      let finalBags = chunk(heavier ? threeCompare.heavier : threeCompare.lighter, 1)
      let finalCompare = bagComparison(finalBags[0], finalBags[1])
      if (finalCompare.equals) { // we know it's the thrid bag
        answerStatement(finalBags[2][0], finalBags[0][0])
      } else {
        let singleCompare = bagComparison(finalBags[0], finalBags[2])
        if (singleCompare.equals) {
          answerStatement(finalBags[1][0], finalBags[0][0])
        } else {
          answerStatement(heavier ? singleCompare.heavier[0] : singleCompare.lighter[0], finalBags[1][0])
        }
      }
    }

  } else { // the third element has a difference and the first two measurments were the same
    // determine if it's heavier or lighter based on this previous comparison
    let comparison = bagComparison(twentyFiveBags[2], twentyFiveBags[0])
    heavier = comparison.firstHeavier
    let twelveBags = chunk((heavier || comparison.equals) ? comparison.heavier : comparison.lighter, 12)
    count++
    let twelveCompare = bagComparison(twelveBags[0], twelveBags[1])
    if (twelveCompare.equals) {
      answerStatement(twelveBags[2][0], twelveBags[0][0])
    } else {
      count++
      let sixBags = chunk(heavier ? twelveCompare.heavier : twelveCompare.lighter, 6)
      let sixCompare = bagComparison(sixBags[0], sixBags[1])
      // one set has to be heavier than the other - determine the next three to test
      let threeBags = chunk(heavier ? sixCompare.heavier : sixCompare.lighter, 3)
      let threeCompare = bagComparison(threeBags[0], threeBags[1])
      // check two of the three bags, if they equal you have your answer else you have one more compare
      let finalBags = chunk(heavier ? threeCompare.heavier : threeCompare.lighter, 1)
      let finalCompare = bagComparison(finalBags[0], finalBags[1])
      if (finalCompare.equals) { // we know it's the thrid bag
        answerStatement(finalBags[2][0], finalBags[0][0])
      } else {
        let singleCompare = bagComparison(finalBags[0], finalBags[2])
        if (singleCompare.equals) {
          answerStatement(finalBags[1][0], finalBags[0][0])
        } else {
          answerStatement(heavier ? singleCompare.heavier[0] : singleCompare.lighter[0], finalBags[1][0])
        }
      }
    }
  }

} else { // We know that one of these two bags has the difference, and that the other two remaining must weight the same
  // Compare one of the differences with one from the other set
  // This is similar to other flow, will build it out later...
}


console.log('\n\x1b[34m**********\x1b[0m')
console.log('\x1b[34m', `Count: ${count}`, '\x1b[0m')
console.log('\x1b[34m**********\x1b[0m')