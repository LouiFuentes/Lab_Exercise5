const userPassword = prompt("Enter your password:");

let lengthValid = false;
let hasUppercase = false;
let hasLowercase = false;
let hasNumber = false;
let hasSpecialChar = false;

if (userPassword.length >= 8) {
  lengthValid = true;
}

if (/[A-Z]/.test(userPassword)) {
  hasUppercase = true;
}

if (/[a-z]/.test(userPassword)) {
  hasLowercase = true;
}

if (/[0-9]/.test(userPassword)) {
  hasNumber = true;
}

if (/[!@#$%^&*]/.test(userPassword)) {
  hasSpecialChar = true;
}

let strengthScore = 0;
if (lengthValid) {
  strengthScore += 1;
}
if (hasUppercase) {
  strengthScore += 1;
}
if (hasLowercase) {
  strengthScore += 1;
}
if (hasNumber) {
  strengthScore += 1;
}
if (hasSpecialChar) {
  strengthScore += 1;
}

let strengthRating;
if (strengthScore === 5) {
  strengthRating = "Strong";
} else if (strengthScore >= 3) {
  strengthRating = "Moderate";
} else {
  strengthRating = "Weak";
}

console.log(`Password Strength: ${strengthRating}`);
console.log(`Length Valid: ${lengthValid}`);
console.log(`Uppercase: ${hasUppercase}`);
console.log(`Lowercase: ${hasLowercase}`);
console.log(`Number: ${hasNumber}`);
console.log(`Special Character: ${hasSpecialChar}`);
