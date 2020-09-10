

function startTime() {
  
  setInterval(function () {
    document.getElementById("time").innerHTML = moment().format("hh:mm:ss");
  }, 1000);
}

startTime();

