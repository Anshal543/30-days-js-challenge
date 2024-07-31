// practical applications
function validatePassword(password) {
    // Define the regular expression
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    // Test the password against the regular expression
    return regex.test(password);
}

// Test examples
console.log(validatePassword("Password1!")); // true
console.log(validatePassword("pass1!"));     // false (missing uppercase letter)
console.log(validatePassword("PASSWORD1!")); // false (missing lowercase letter)
console.log(validatePassword("Password!"));  // false (missing digit)
console.log(validatePassword("Pass1"));      // false (missing special character)


let url = "https://www.example.com";
let regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
let isValid = regex.test(url);
console.log(isValid);