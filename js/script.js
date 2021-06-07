// document.getElementById("input-number").value = getSavedValue("input-number");
// //Save the value function - save it to localStorage as (ID, VALUE)
// function saveValue(e) {
//   var id = e.id; // get the sender's id to save it .
//   var val = e.value; // get the value.
//   localStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override .
// }

// //get the saved value function - return the value of "v" from localStorage.
// function getSavedValue(v) {
//   if (!localStorage.getItem(v)) {
//     return ""; // You can change this to your defualt value.
//   }
//   return localStorage.getItem(v);
// }

function CountryCodePlaceholder() {
  let countryCode = document.getElementById("country-code").value;
  if (countryCode === "62") {
    document
      .getElementById("input-number")
      .setAttribute("placeholder", "Insert Phone Number, Ex: 081222333444");
  } else if (countryCode === "60") {
    document
      .getElementById("input-number")
      .setAttribute("placeholder", "Insert Phone Number, Ex: 01233334444");
  } else if (countryCode === "65") {
    document
      .getElementById("input-number")
      .setAttribute("placeholder", "Insert Phone Number, Ex: 067676868");
  }
}

function Chat() {
  let number = document.getElementById("input-number").value;
  let countryCode = document.getElementById("country-code").value;
  let fixNumber = number.substring(1);

  document
    .getElementById("btn-chat")
    .setAttribute("href", `https://wa.me/${countryCode}${fixNumber}`);
}
