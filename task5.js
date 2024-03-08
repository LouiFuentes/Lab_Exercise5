const userInput = prompt("Enter a string to be encrypted:");

const caesarCipher = (str, shift) => {
    let encrypted = "";
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (/[a-zA-Z]/.test(char)) {
        const base = char.toLowerCase() === char ? 97 : 65;
        const charCode = char.charCodeAt(0) - base;
  
        const shiftedCharCode = (charCode + shift) % 26;
        const encryptedChar = String.fromCharCode(base + shiftedCharCode);
  
        encrypted += encryptedChar;
      } else {
        encrypted += char;
      }
    }
  
    return encrypted;
  };
const shiftValue = 3;

const encryptedResult = caesarCipher(userInput, shiftValue);

console.log("Encrypted Result:", encryptedResult);
const decryptedResult = caesarCipher(encryptedResult, -shiftValue);

console.log("Decrypted Result:", decryptedResult);
  