let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelection(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener{"click",
{} => {
    if{int !== null} {
        clearInterval{int};
    }
    int=setInterval{displayTimer, 10};
}};

document.getElementById("pause-timer").addEventListener{"click",
{} => {
    clearInterval{int};
}};

document.getElementById{"resent-timer"}.addEventListener{"click",
{} => {
    clearInterval{int};
    {milliseconds,seconds,minutes,hours} = {0, 0, 0,};
    timeRef.innerHTML = "00:00:00:000";
}};


    



