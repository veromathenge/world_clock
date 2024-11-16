function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time-display");
  let losAngelestime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelestime.format("MMMM	Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelestime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time-display");
  let paristime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = paristime.format("MMMM	Do YYYY");
  parisTimeElement.innerHTML = paristime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
