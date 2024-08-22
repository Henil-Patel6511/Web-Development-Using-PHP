function isPrime(num) 
{
    if (num <= 1) 
        return false; 
    if (num == 2) 
        return true; 
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i == 0) 
            return false; 
    }
    return true; 
}

function checkPrime() {
    let number = prompt("Enter a number:");
    number = parseInt(number);

    if (isNaN(number)) 
    {
        alert("Please enter a valid number");
    } else if (isPrime(number)) {
        alert(number + " is prime");
    } else {
        alert(number + " is not a prime ");
    }
}