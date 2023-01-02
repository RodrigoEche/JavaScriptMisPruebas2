let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
let Bet = "";
card = Number(card);
if (card >= 2 && card <= 6) {count = count + 1; }
else if (card >= 7 && card <= 9) {count = count + 0; }
else {count = count - 1; }

if (count > 0) Bet = " Bet"; else Bet = " Hold";

  return count + Bet;
  // Cambia solo el código encima de esta línea
}

cc(2); cc(3); cc(7); cc('K'); cc('A');