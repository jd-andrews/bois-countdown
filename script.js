// Set the date we're counting down to
let countDownDate = new Date("Dec 10, 2021 15:00:00").getTime();

// Update the count down every 1 second

let countDown = setInterval(function () {
  let howLongTil = countDownDate - new Date().getTime();

  document.getElementById("days").innerHTML = Math.floor(
    howLongTil / (1000 * 60 * 60 * 24)
  );
  document.getElementById("hours").innerHTML = Math.floor(
    (howLongTil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.getElementById("mins").innerHTML = Math.floor(
    (howLongTil % (1000 * 60 * 60)) / (1000 * 60)
  );
  document.getElementById("sex").innerHTML = Math.floor(
    (howLongTil % (1000 * 60)) / 1000
  );
}, 1000);
