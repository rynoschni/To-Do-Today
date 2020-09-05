'use strict'
const Night = document.getElementById('Night')
const Day = document.getElementById('Day')


Night.addEventListener('click', function (event) {
    event.preventDefault();
    var style1 = document.getElementById("stylesheet1");
    style1.onclick = swapStyleSheet("styles/styles.css");
    console.log('hi')
    // style1.onclick = swapStyleSheet("styles/styles.css");
  });

Day.addEventListener('click', function (event) {
    event.preventDefault();
    var style1 = document.getElementById("stylesheet1");
    style1.onclick = swapStyleSheet("styles/styles-light.css");
    console.log('hi')
    // style1.onclick = swapStyleSheet("styles/styles.css");
  });

  function swapStyleSheet(sheet) {
    document.getElementById("stylesheet1").setAttribute("href", sheet);  
};