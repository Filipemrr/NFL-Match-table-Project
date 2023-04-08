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
  "indianopolis",

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
let dayOfWeek
let dayOfMonth
var html = ""
for (var i = 0; i < times.length - 1; i += 2) {
  if (i < 4) {
    dayOfWeek = ["Saturday"]
    dayOfMonth = ["07/01"]
  } else {
    dayOfWeek = ["Sunday"]
    dayOfMonth = ["08/01"]
  }
  if (i < 4) {
    html += createCard(
      dayOfMonth,
      dayOfWeek,
      createGame(times[i], "16:00", times[i + 1])
    )
  } else {
    html += createCard(
      dayOfMonth,
      dayOfWeek,
      createGame(times[i], "16:00", times[i + 1]) +
        createGame(times[i + 2], "16:00", times[i + 3]) +
        createGame(times[i + 4], "16:00", times[i + 5]) +
        createGame(times[i + 6], "16:00", times[i + 7])
    )
    i += 8
  }
}

document.querySelector("#cards").innerHTML = html
