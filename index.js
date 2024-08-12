// Exercise 1: Counting to 10
// Use a while loop to print all numbers from 1 to 10
let counter = 0

while (counter < 10){
  counter++
  console.log(counter)
}
console.log("Count of 1-10")



// Exercise 2: Even numbers
// Use a while loop to print all the even numbers from 20 to 40

num = 20
while (num <=40){
    if (num % 2 == 0)
        console.log(num)
    num += 1
}

// Exercise 3: Countdown
// Ask the user to enter a positive integer (remember to cast!) Use a while loop to print from that number down to 1
let user = prompt ("Enter a number")
user = parseInt(user)
while(user > 0){
  console.log(user)
  user--
}


// Exercise 4: Sum of N Numbers
// Prompt the user to enter a positive integer. Calculate the sum of all numbers from 1 to that number using a while loop and display the result.
let user2 = prompt ("Enter a positive integer")
user2 = parseInt(user2)
sum = 0

while(user2 > 0){
        sum = sum + user2
user2--
}
console.log("The sum of the numbers is", sum)
// Exercise 5: Password Entry
// Create a simple password entry program. Ask the user to enter a password. Use a while loop to keep prompting the user until they enter the correct password (e.g., "secret").
let password = "khii"
let user3 = prompt("Enter a password").toLowerCase()
while(password !== user3)
  user3 = prompt("Try again, guess a different password")
  if (password === user3){
prompt("Good job")  
}



// Extra Credit: Password Strength Checker
// Create a password strength checker with a while loop. Continuously prompt the user to enter a password until it meets the following criteria:
// - At least 8 characters long
// - Contains both uppercase and lowercase letters
// - Includes at least one special character (e.g., @, #, $, etc.)
// Display a message when a valid password is entered.
// Hint: start by doing the conditions one by one and then combine them after




