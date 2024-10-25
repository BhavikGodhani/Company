
  let clock = document.getElementById('clock');
  let time = document.getElementById('tdyDate');


   function datetime(){
     
       setInterval(()=> {
        let date = new Date();
           let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
            clock.children[0].innerHTML = hours;
            let minutes = date.getMinutes();
            if (minutes < 10) minutes = '0' + minutes;
            clock.children[1].innerHTML = minutes;

            let seconds = date.getSeconds();
            if (seconds < 10) seconds = '0' + seconds;
            clock.children[2].innerHTML = seconds;
   
},1000);
    
      let date = new Date();   
    let tdydate = date.toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit'}).split('/').join(' ');

       time.children[0].innerHTML = tdydate;

}
datetime();

let start1 = document.getElementById("start1");
let stop1 = document.getElementById("stop1");
let resume1 = document.getElementById("resume1");
let reset1 = document.getElementById("reset1");




let startTime; 
let stopinterval; 
let pausedTime = 0; 
 

stop1.setAttribute("disabled","");
resume1.setAttribute("disabled","");
reset1.setAttribute("disabled","");
function start() {
    
  if (!stopinterval) {
    startTime = new Date().getTime() - pausedTime; 

    stopinterval = setInterval(updateStopwatch
    , 1000);

  }
 
start1.setAttribute("disabled","");
resume1.setAttribute("disabled","");
reset1.removeAttribute("disabled","");                                                                                                                                                                                                                               
stop1.removeAttribute("disabled","");

}

function stop() {
  clearInterval(stopinterval); 
  pausedTime = new Date().getTime() - startTime; 
  stopinterval = null; 
  start1.setAttribute("disabled","");
  stop1.setAttribute("disabled","");
  resume1.removeAttribute("disabled","");
  reset1.removeAttribute("disabled","");

}   
function resume(){
   
  setInterval(start(),10);
}
function reset() {  
  stop();
  pausedTime = 0;
  document.getElementById("stopwatch").innerHTML = "00:00:00:00";

  start1.removeAttribute("disabled");  //enabled
  reset1.setAttribute("disabled","");
  stop1.setAttribute("disabled","");
  resume1.setAttribute("disabled","");
}

function updateStopwatch() {
  let currentTime = new Date().getTime(); 
  let difftime = currentTime - startTime; 
  let seconds = Math.floor(difftime / 1000) % 60;
  let minutes = Math.floor(difftime / 1000 / 60) % 60;
  let hours = Math.floor(difftime / 1000 / 60 / 60); 
  let displayTime = "00:"  + pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("stopwatch").innerHTML = displayTime;
}

function pad(number) {
 
  return (number < 10 ? "0" : "") + number;
}
    
