import promptSync from 'prompt-sync';
const prompt = promptSync();

const year = +(prompt ("Enter a year: "));

if (isNaN(year)) {
    console.log("Please enter a year using NUMBERS only");
}
else if (!Number.isInteger(year)) {
  console.log("Enter INTEGER numbers please");
}
else if ((year<1)||(year>9999)) {
  console.log("Invalid year!");
}
else if ((year%400===0)||(year%100!==0&&year%4===0)) {
  console.log(`Yes, ${year} is a leap year`);
}
else {
  console.log(`No, ${year} is a not leap year`);
}
// Write your code here
// Guidance:
// Step 1: prompt the user to enter a year
// Step 2: convert the user input to a number so we can perform calculations
// Step 3: Implement the logic
