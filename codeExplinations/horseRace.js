// Logic Puzzles
// Run via node: `node temp.js`

/*
 You have 25 horses, and a track that can race 5 at a time.
 How do you find the fastest three with the least amount of races?
 */

// The "speeds" of the horses -> 0, 1, 2 are the top three
let speeds = shuffle([...Array(25).keys()])
let horses = speeds.map((speed, i) => {
  return {
    horseNumber: i + 1,
    speed: speed
  }
})
let raceCount = 0

function shuffle (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function orderHorses (arrObj) {
  return arrObj.map((el) => {
    return el.horseNumber
  })
}

// puzzle logic
// Times would not be show...but need them for calculation

/*
    STEP 1
    Race all 25 horses
*/
console.log('\x1b[31m', `STEP 1: Race all 25 horses by 5s`, '\x1b[0m')
let initialRaces = []

// 1st race of 5
raceCount++
let race1 = horses.slice(0, 5).sort(function (a, b) { return a.speed - b.speed })
let orderRace1 = orderHorses(race1)
initialRaces.push(race1)
console.log('\x1b[36m', `Race 1: ${orderRace1}`, '\x1b[0m')

// 2nd race of 5
raceCount++
let race2 = horses.slice(5, 10).sort(function (a, b) { return a.speed - b.speed })
let orderRace2 = orderHorses(race2)
initialRaces.push(race2)
console.log('\x1b[36m', `Race 2: ${orderRace2}`, '\x1b[0m')

// 3rd race of 5
raceCount++
let race3 = horses.slice(10, 15).sort(function (a, b) { return a.speed - b.speed })
let orderRace3 = orderHorses(race3)
initialRaces.push(race3)
console.log('\x1b[36m', `Race 3: ${orderRace3}`, '\x1b[0m')

// 4th race of 5
raceCount++
let race4 = horses.slice(15, 20).sort(function (a, b) { return a.speed - b.speed })
let orderRace4 = orderHorses(race4)
initialRaces.push(race4)
console.log('\x1b[36m', `Race 4: ${orderRace4}`, '\x1b[0m')

// 5th race of 5
raceCount++
let race5 = horses.slice(20, 25).sort(function (a, b) { return a.speed - b.speed })
let orderRace5 = orderHorses(race5)
initialRaces.push(race5)
console.log('\x1b[36m', `Race 5: ${orderRace5}`, '\x1b[0m\n')

/*
    STEP 2
    RACE ALL THE WINNERS FROM THE FIRST ROUND
*/
console.log('\x1b[31m', `STEP 2: Race all winners`, '\x1b[0m')
raceCount++
let winners = [race1[0], race2[0], race3[0], race4[0], race5[0]]
let race6 = winners.sort(function (a, b) { return a.speed - b.speed })
let orderRace6 = orderHorses(race6)
console.log('\x1b[36m', `Race 6: ${orderRace6}`, '\x1b[0m')

/*
    STEP 3

    Now the last race needed will be racing the following
    First two horses from the winners 1st (2A/3A)
    First two horses from the winners 2nd (1B/2B)
    thirst place horse from winners (3C)

    Explination:
    We already know 1A is the fastest so we don't have to race them again
    We can exclude all the 4s and 5s as they undobutibly have three horses better than them
    We can eliminate 3B since 1A, 1B, and 2B are all faster than it
    We can eliminate 2C and 3C since we know 1A, 1B, and 1C are all faster than them
*/

/*
     0  1  2  3  4 (Array Value)
  0  1A 1B 1C 1D 1E
  1  2A 2B 2C 2D 2E
  2  3A 3B 3C 3D 3E
  3  4A 4B 4C 4D 4E
  4  5A 5B 5C 5D 5E
*/

raceCount++
console.log('\x1b[31m\n', `STEP 3: Race 2A, 3A, 1B, 2B, 1C`, '\x1b[0m')
let orderRaces = initialRaces.sort(function (a, b) { return a[0].speed - b[0].speed })
let race7 = [
  orderRaces[0][1],
  orderRaces[0][2],
  orderRaces[1][0],
  orderRaces[1][1],
  orderRaces[2][0]
].sort(function (a, b) { return a.speed - b.speed })
let orderRace7 = orderHorses(race7)
console.log('\x1b[36m', `Race 7:  ${orderRace7}`, '\x1b[0m')
console.log('\x1b[34m', `Number of races: ${raceCount}`, '\x1b[0m')
let first = orderRaces[0][0].horseNumber
console.log('\n\x1b[32m', `first: ${first}`, '\x1b[0m')

// winner of race 7
console.log('\x1b[33m', `second: ${race7[0].horseNumber}`, '\x1b[0m')

// 2nd place of race 7
console.log('\x1b[35m', `third: ${race7[1].horseNumber}`, '\x1b[0m')

console.log('\x1b[37m', `\nHorse Details for verification:`, '\x1b[0m')
console.log('\x1b[32m', `1st = 0`, '\x1b[0m')
console.log('\x1b[33m', `2nd = 1`, '\x1b[0m')
console.log('\x1b[35m', `3rd = 2`, '\x1b[0m')
horses.map((horse) => {
  switch (horse.speed) {
    case 0:
      console.log('\x1b[32m', horse, '\x1b[0m')
      break
    case 1:
      console.log('\x1b[33m', horse, '\x1b[0m')
      break
    case 2:
      console.log('\x1b[35m', horse, '\x1b[0m')
      break
    default: console.log(horse)
  }
})
