function CalculateKennel(){
  let dogSize = document.getElementById("dogSize").value;
  let numDays = document.getElementById("numDays").value;
  let beforeTax = parseInt(dogSize) * numDays;
  let totalCost = Math.round(100 * (beforeTax + (beforeTax * 0.0485))) / 100;
  document.getElementById("answer").textContent = `Cost: $${totalCost}`;
}