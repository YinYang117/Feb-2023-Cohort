/*

Write a function called bankAccount that takes in an initial bank balance to start the
account at && returns a function.

The inner function should take in 2 arguments.
The first argument should be a number amount that is greater than 0, the 2nd argument should be a string of 'withdraw' || 'deposit'
If the transaction is Withdraw, subtract the num from the bank balance existing in the outter function
If the transaction is Deposit, add the num from the bank balance existing in the outter function.
Inner function should return the new balance

*/

/*

function bankAccount
@ params initial bank balace as number
@ returns an inner function called transactionFunction

function transactionFunction
@ number > 0, string "withdraw" || 'deposit
@ returns number with the balance changed

*/

function bankAccount(initialNum) {
    //start the balance at the entered initial number
    let balance = initialNum;

    return function transactionFunction(amount, transactionType) {
        //error handling to make sure a user entered transactionType is always hitting our if statements
        let lowercasedTransactionType = transactionType.toLowerCase();
        //if they withdraw, subtract and reassign from the balance.
        if (lowercasedTransactionType === 'withdraw') {
            balance -= amount;
            //return the balance as part of the inner function's return. Adding rounding and money signs for fun
            return '$ ' + balance.toFixed(2);
        }

        if (lowercasedTransactionType === 'deposit') {
            //if they deposit, add and reassign from the balance.
            balance += amount;
            //return the balance as part of the inner function's return. Adding rounding and money signs for fun
            return '$ ' + balance.toFixed(2)
        }
        //if they don't pass anything in, just show them the balance
        if (amount === undefined && lowercasedTransactionType === undefined) {
            return '$ ' + balance.toFixed(2);
        }
    }

}


//Ryan has an instance of his bank account and it does not affect anthony's bank account
// console.log(bankAccount(500)) // returns a function (outter function returns an inner function)
let ryan = bankAccount(500); //storing the inner function into a variable 
console.log(ryan(100, 'deposit')) //use inner function with our parameters 
console.log(ryan(100, 'WITHDRAW'))
console.log(ryan(100_000_000, 'deposit'))
// console.log(ryan())

// let anthony = bankAccount(500);
// anthony(50, 'withdraw');
// anthony(50, 'deposit');
// anthony(1000, 'deposit');
