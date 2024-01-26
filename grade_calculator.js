// get a mark as input
let mark = 90;

if(mark <= 100 && mark >=0) {
    if(mark >= 90 && mark <= 100) {
        console.log("You have got A grade.");
    }
    else if(mark >= 80 && mark < 90) {
        console.log("You have got B grade.");
    }
    else if(mark >= 70 && mark < 80) {
        console.log("You have got C grade.");
    }
    else if(mark >= 60 && mark < 70) {
        console.log("You have got D grade.");
    }
    else {
        console.log("You have failed.");
    }
}
else {
    console.log("Enter a valid mark.");
}