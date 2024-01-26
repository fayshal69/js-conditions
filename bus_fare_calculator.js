let age = 12;
// if student then person will be Student
let person = "";
let ticketPrice = 800;

if(age < 10) {
    console.log("Ticket is free for childen.")
}

else if (age > 10 && age < 60 && person === "Student") {
    let discount = ((ticketPrice * 50) / 100);
    ticketPrice = ticketPrice - discount;
    console.log(`Ticket price is ${ticketPrice} tk.`);
}

else if (age > 10 && age < 60 && person !== "Student") {
    console.log(`Ticket price is ${ticketPrice} tk.`);
}

else if (age >= 60) {
    let discount = ((ticketPrice * 15) / 100);
    ticketPrice = ticketPrice - discount;
    console.log(`Ticket price is ${ticketPrice} tk.`);
}
