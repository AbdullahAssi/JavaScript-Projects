const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setdate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // 90 is the offset to make the clock start at 12
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90; // 90 is the offset to make the clock start at 12
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(mins);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90; // 90 is the offset to make the clock start at 12
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}


setInterval(setdate, 1000); // 1000 is the interval in milliseconds


function digital() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const currentDate = now.getDate(); 
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    console.log(`${hours}:${mins}:${seconds}`);
    document.getElementById("display").innerHTML = `Time: ${hours}:${mins}:${seconds}<br>Date: ${currentDate}:${currentMonth}:${currentYear}`;
}

setInterval(digital, 1000);

function displayDateTime() {
    var currentDateTime = new Date();
    
    var date = currentDateTime.toDateString();
    var time = currentDateTime.toLocaleTimeString();
    
    var dateTimeString = 'Current Date: ' + date + '<br>Current Time: ' + time;
    
    document.getElementById('datetime').innerHTML = dateTimeString;
}