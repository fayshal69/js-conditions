// weight in kg
let weight = 80;
weight = (weight * 220462) / 100000;

// height in inch
let height = 62;

let bmi;

bmi = (weight / (height * height)) * 703;

console.log(bmi);

if (bmi <= 18.4) {
  console.log("You are underweight.");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal.");
} 
else if (bmi >= 25 && bmi <= 39.9) {
  console.log("You are overweight.");
} 
else {
  console.log("You are obese.");
}
