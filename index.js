// function changeText() {
//   //   Event.preventDefault();
//   let text = document.querySelector("#para");
//   let input = document.querySelector("#input-value");
//   text.innerHTML = input.value;
// }
// let inputValue = document.querySelector("#search-btn");
// inputValue.addEventListener("submit", changeText);

// function updateHeading(newHeading) {
//   let heading = document.querySelector("h1");
//   heading.innerHTML = newHeading;
//   heading = document.querySelector("h1").style.color = "white";
//   heading = document.querySelector("h1").style.fontSize = "11px";
// }
function foodie() {
  let name = prompt("Welcome! What is your Name?");
  let country = prompt("🌎From which country are you?");
  let food = prompt(
    "What type of food you want from us? Asian, French, Greek.😇"
  );
  food = food.toLowerCase().trim();
  if (food === "asian" || food === "french" || food === "greek") {
    let h1 = document.querySelector("#para");
    h1.innerHTML = `Hi👋 ${name}, Thank's for connected from ${country}, Happy Exploring ${food} food😍`;
    // updateHeading(
    //   `Hi👋 ${name}, Thank's for connected from ${country}, Happy Exploring ${food} food😍`
    // );
  } else {
    alert(
      `Ahhh ${name} your ${food} food is out of box😕, Stay connected for taste different🤤`
    );
    // updateHeading(
    //   `Ahhh ${name} your ${food} food is out of box😕, Stay connected for taste different🤤`
    // );
  }
}
let login = document.querySelector("#sign-in");
login.addEventListener("click", foodie);
