function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}
var times = [
  "kansas",
  "raiders",

  "tenesse",
  "jackson",

  "tampa",
  "falcons",

  "new",
  "buffalo",

  "vikings",
  "chicago",

  "baltimore",
  "cincinnati",

  "houston",
  "indianapolis",

  "newyork",
  "miami",

  "carolina",
  "newO",

  "bronws",
  "steelers",

  "nygiants",
  "eagles",

  "cowboys",
  "commanders",

  "chargers",
  "broncos",

  "rams",
  "seahawks",

  "cardinals",
  "49",

  "lions",
  "greenbay",
]
var schedule = [
  "4:30",
  "8:15",
  "1:00",
  "1:00",
  "1:00",
  "1:00",
  "1:00",
  "1:00",
  "1:00",
  "1:00",
  "4:25",
  "4:25",
  "4:25",
  "4:25",
  "4:25",
  "8:20",
]

let dayOfWeek
let dayOfMonth
var j = 0
var html = ""
for (var i = 0; i < times.length - 4; i += 1) {
  if (i < 4) {
    dayOfWeek = ["Saturday"]
    dayOfMonth = ["07/01"]
  } else {
    dayOfWeek = ["Sunday"]
    dayOfMonth = ["08/01"]
  }
  if (i < 3) {
    html += createCard(
      dayOfMonth,
      dayOfWeek,
      createGame(times[i], schedule[j], times[i + 1]) +
        createGame(times[i + 2], schedule[j + 1], times[i + 3])
    )
    i += 3
    j += 2
  } else {
    html += createCard(
      dayOfMonth,
      dayOfWeek,
      createGame(times[i], schedule[j], times[i + 1]) +
        createGame(times[i + 2], schedule[j + 1], times[i + 3]) +
        createGame(times[i + 4], schedule[j + 2], times[i + 5]) +
        createGame(times[i + 6], schedule[j + 3], times[i + 7])
    )
    i += 7
    j += 4
  }
}
html += createCard(
  dayOfMonth,
  dayOfWeek,
  createGame(times[28], schedule[14], times[29]) +
    createGame(times[30], schedule[15], times[31])
)
document.querySelector("#cards").innerHTML = html
