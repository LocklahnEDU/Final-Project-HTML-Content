function CalculateKennel(){
  
  let dogSize = document.getElementById("dogSize").value;
  let numDays = document.getElementById("numDays").value;
  if (numDays == 0) {
    alert("Please enter an amount of time.")
  }
  let beforeTax = parseInt(dogSize) * numDays;
  let totalCost = Math.round(100 * (beforeTax + (beforeTax * 0.0485))) / 100;
  document.getElementById("answer").textContent = `Cost: $${totalCost}`;
}