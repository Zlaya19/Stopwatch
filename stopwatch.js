let seconds = 0;
let minutes = 0;
let hours = 0;

let dblDigitSeconds = 0;
let dblDigitMinutes = 0;
let dblDigitHours = 0;

let status = true;
let interval = 0;

const start = document.getElementById('btn1');
const stop = document.getElementById('btn2');
const reset = document.getElementById('btn3');

start.addEventListener('click',function (){
    if(status === true){
       interval = setInterval(stopWatch, 100);
       status = false;
    }
    

});

    function stopWatch(){

        seconds++;

        if(seconds / 60 === 1){
            minutes++;
            seconds = 0;
        }
        if(seconds / 60 === 1){
            hours++;
            minutes = 0;
        }

        if(seconds < 10){
            dblDigitSeconds = '0' + seconds.toString();
        }else{
            dblDigitSeconds = seconds;
        }
        if(minutes < 10){
            dblDigitMinutes = '0' + minutes.toString();
        }else{
            dblDigitMinutes = minutes;
        }
        if(hours < 10){
            dblDigitHours = '0' + hours.toString();
        }else{
            dblDigitHours = hours;
        }

        stop.addEventListener('click', removeInterval);
            
            function removeInterval(){
                interval = clearInterval(interval);
                status = true;
            }
        
        reset.addEventListener('click', function(){
            interval = clearInterval(interval);
            seconds = 0;
            minutes = 0;
            hours = 0;
            output.innerHTML = '<h4>' + '0' + hours + ':' + '0' + minutes  + ':' + '0' + seconds + '</h4>';
        })
        
        
        const output = document.getElementById('output');
        output.innerHTML = '<h4>' + dblDigitHours + ':' + dblDigitMinutes + ':' + dblDigitSeconds + '</h4>';

    }

    