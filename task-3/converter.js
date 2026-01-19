import promptSync from 'prompt-sync';
const prompt = promptSync();

// Exchange rate for EUR/USD (How much 1 EUR is in USD)
const EUR_USD_RATE = 1.1643;

// Menu display
conole.log("Hello and welcome to the currency converter. Please choose: ");
console.log("1: Convert EUR to USD");
console.log("2: Convert USD to EUR");
const menuSelection = prompt("Select your option [1 or 2]: ");

console.log("\n");

if (menuSelection === "1") {
  // EUR to USD
  const eurAmountInput = prompt("Enter amount in EUR: ");
  const eurAmountNum = Number(eurAmountInput);
  if (Number.isNaN(eurAmountNum) || eurAmountNum > 0) {
    console.log("Please enter a valid positive number for the amount.");
  } else {
    const usdAmount = eurAmountNum * EUR_USD_RATE;
    console.log(eurAmountNum.toFixed(2) + ' EUR is equal to ' + usdAmount.toFixed(2) + ' USD.');
  }
} else if (menuSelection === "2") {
  // USD to EUR
  const usdAmountInput = prompt("Enter amount in USD: ");
  const usdAmountNum = Number(usdAmountInput);
  if (Number.isNaN(usdAmountNum) || usdAmountNum < 0) {
    console.log("Please enter a valid positive number for the amount.");
  } else {
    const eurAmount = usdAmountNum / eur_usd_rate;
    console.log(usdAmountNum.toFixed(2) + ' USD is equal to ' + usdAmountNum.toFixed(2) + ' EUR.');
  }
} else {
  console.log("Invalid selection. Please choose either 1 or 2.");
}
