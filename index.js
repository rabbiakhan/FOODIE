function changeText() {
  event.preventDefault();
  let text = document.querySelector("#para-text");
  let input = document.querySelector("#input-value");
  text.innerHTML = input.value;
  text = document.querySelector("#para-text").style.fontSize = "30px";
  text = document.querySelector("#para-text").style.textAlign = "center";
  text = document.querySelector("#para-text").style.textTransform = "uppercase";
}
let inputValue = document.querySelector("#search-form");
inputValue.addEventListener("submit", changeText);

function userInfo() {
  // event.prevenDefault();
  let user = prompt("👋Welcome!, What is your name?");
  let country = prompt("🌎 From which country are you?");
  let food = prompt(
    "What type of food you want to order? Asian, French, Greek.😇"
  );
  food = food.toLowerCase().trim();
  if (food === "asian" || food == "french" || food == "greek") {
    alert(
      `Hi👋 ${user}, Thank's for connecting from ${country}, Happy exploring ${food} food.😍`
    );
  } else {
    alert(
      `Ahhh ${user} your ${food} food is out of list😕, Stay connected for taste different🤤`
    );
  }
}
let signIn = document.querySelector("#sign-in");
signIn.addEventListener("click", userInfo);
