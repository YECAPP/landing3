// Establecer la fecha 
    var d= new Date();
    var nYear=d.getFullYear();
    var nMonth=d.getMonth();
    var nDay=d.getDate();
    var nHours=23;
    var nMinutes=59;
    var nSeconds=59;
    var nMilliseconds=0;
    var countDownDate = new Date(nYear, nMonth, nDay, nHours, nMinutes, nSeconds, nMilliseconds).getTime();
// Establecer la fecha 

    
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    lcValue=days + " días | " + hours + " Horas | "
    + minutes + " Mins | " + seconds + " Segs ";

    document.getElementById("timer1").innerHTML = lcValue;
    document.getElementById("timer2").innerHTML = lcValue;
    document.getElementById("timer3").innerHTML = lcValue;
    
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer1").innerHTML = "Expiró";
        document.getElementById("timer2").innerHTML = "Expiró";
        document.getElementById("timer3").innerHTML = "Expiró";
    }
    }, 1000);