function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement =
      losAngelesElement.querySelector(".time-display");
    let losAngelestime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelestime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelestime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time-display");
    let paristime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = paristime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = paristime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city" >
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time-display">
        ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")} </small>
      </div>
    </div>
    <a href="/">All Cities<a>
    `;
}
updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
