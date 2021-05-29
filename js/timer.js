var countDownDate=new Date("June 6 2021 15:37:25").getTime(),x=setInterval(function(){var e=(new Date).getTime(),t=countDownDate-e,n=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),o=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3);document.getElementById("timer").innerHTML=n+"d "+a+"h "+o+"m "+r+"s ",t<0&&(clearInterval(x),document.getElementById("timer").innerHTML="We have launched")},1e3);



/*
var countDownDate = new Date("June 6 2021 15:37:25").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "We have launched";
  }
}, 1000);

*/



