let clock = document.getElementById('clock');

function updateTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    // Test logging the output
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    // Adding a zero in front of the second or minute inorder to make it seem like this >> 11:56:05
    // Not like this >> 11:56:5
    hours = hours < 10 ? "0" + hours:hours;
    minutes = minutes < 10 ? "0" + minutes:minutes;
    seconds = seconds < 10 ? "0" + seconds:seconds;
    
    // Actual output
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

    // Setting the time lapse
    setTimeout(updateTime, 1000);
}

updateTime();