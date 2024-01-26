let myMark = 50;
let friendMark = 70;

if(myMark >= 80) {
    if(friendMark >= 80) {
        console.log("We will go for a lunch");
    }
    else if(friendMark < 80 && friendMark >= 60) {
        console.log("Good luck next time.");
    }
    else if(friendMark < 60 && friendMark >= 40) {
        console.log("I will make my friend's message unseen.");
    }
    else {
        console.log("I will block my friend");
    }
}
else {
    console.log("I am going to home for sleep.");
}