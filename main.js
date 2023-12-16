let firstS = document.querySelector("#selectCu1");
let secondS = document.querySelector("#selectCu2");
let amount = document.querySelector("#amount");
let theForm = document.querySelector(".price");
let result = document.querySelector(".result")
fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0350f5bda1d04316b217ea3eaa8a347a"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((myData) => {
    let ratesObj = myData.rates;
    let rKeys = Object.keys(myData.rates);
    rKeys.forEach((e) => {
      let op = document.createElement("option");
      op.textContent = e;
      secondS.appendChild(op);
    });
    rKeys.forEach((e) => {
      let op = document.createElement("option");
      op.textContent = e;
      firstS.appendChild(op);
    });
    theForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // console.log()
      result.textContent=`${(amount.value  / ratesObj[firstS.value] * ratesObj[secondS.value]).toFixed(2)}   ${secondS.value}`;
    });
  });
