// window.onload = function(){
    var tens = 0;
    var seconds = 0;
    var minutes = 0;
    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');
    var appendMinutes = document.getElementById('minutes');
    var startBtn = document.getElementById('start');
    var stopBtn = document.getElementById('stop');
    var resetBtn = document.getElementById('reset');
    var interval;

    startBtn.onclick = function(){
        clearInterval(interval);
        interval = setInterval(timeStart, 10);
    }

    stopBtn.onclick = function(){
        clearInterval(interval);
    }

    resetBtn.onclick = function(){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        minutes = "00"
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }

    function timeStart(){
        tens++;
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 60){
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(minutes > 9){
            appendMinutes.innerHTML = minutes;
        }
    }
// }