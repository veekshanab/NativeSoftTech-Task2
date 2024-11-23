let account = {
    balance: 0,
    accountHolder: ''
};

// Function to create a new account
function createAccount() {
    const accountName = prompt('Enter your name to create an account:');
    if (accountName) {
        account.accountHolder = accountName;
        account.balance = 0;
        document.getElementById('accountDetails').textContent = `${accountName}, your account has been created. Balance: $${account.balance}`;
    }
}

// Function to deposit money into the account
function depositMoney() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }

    account.balance += depositAmount;
    document.getElementById('accountDetails').textContent = `${account.accountHolder}, your new balance is: $${account.balance}`;
    document.getElementById('depositAmount').value = ''; // Clear input field
}

// Function to withdraw money from the account
function withdrawMoney() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0 || withdrawAmount > account.balance) {
        alert('Please enter a valid amount to withdraw or ensure sufficient funds.');
        return;
    }

    account.balance -= withdrawAmount;
    document.getElementById('accountDetails').textContent = `${account.accountHolder}, your new balance is: $${account.balance}`;
    document.getElementById('withdrawAmount').value = ''; // Clear input field
}

// Function to check account balance
function checkBalance() {
    if (account.accountHolder) {
        document.getElementById('accountDetails').textContent = `${account.accountHolder}, your balance is: $${account.balance}`;
    } else {
        document.getElementById('accountDetails').textContent = 'No account created yet.';
    }
}
