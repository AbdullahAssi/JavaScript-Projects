let hr = document.getElementById("hr");
let min = document.getElementById("mn");
let sec = document.getElementById("sc");


setInterval(()=>{
    let currentTime = new Date();
    hr.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
},1000);


