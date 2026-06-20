// const students = {
//     name : "Ahmed",
//     eng :97,
//     maths : 86,
//     phy : 97,
//     chem : 97,
//     getAvg() {
//         let avg= (this.eng+this.maths+this.phy+this.chem)/4;
//         console.log(`${this.name} has got the avg marks ${avg}`)
//     }
// };

// students.getAvg();

const account = {
    holder : "Muqthadir",
    balance: 5678,
    deposit(amount){
        this.balance += amount;
        console.log(`$(this.holder) has deposited $$(amount). New balance$$(this.balance)`);
    }
};

account.deposit(500);

