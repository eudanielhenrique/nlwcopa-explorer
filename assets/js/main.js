function createGame(team1, hour, team2) {
  return `
  <li>
  <img
    src="./assets/img/icons/icon=${team1}.svg"
    alt="Bandeira ${team1}"
  />
  <strong class="horarios"> ${hour} </strong>
  <img
    src="./assets/img/icons/icon=${team2}.svg"
    alt="Bandeira ${team2}"
  />
</li>
`;
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "Quinta",
    createGame("brazil", "17:00", "serbia") +
      createGame("portugal", "09:00", "cameroon")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("brazil", "17:00", "serbia") +
      createGame("portugal", "09:00", "cameroon")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("brazil", "17:00", "serbia") +
      createGame("portugal", "09:00", "cameroon")
  );
