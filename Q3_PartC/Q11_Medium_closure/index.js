let balance = 0;
function createWallet() {
    return {
        function: addMoney(amount){
        myWallet.push(amount)
        myWallet+=amount
    }

    function: checkBalance(myWallet){
        console.log(myWallet)

    }
}
return checkBalance{
    console.log(checkBalance)
}
}

let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance(); 