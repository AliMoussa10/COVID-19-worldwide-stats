window.onload = async function() {
window.onscroll = function() {myFunction()};

    const res = await fetch('https://corona.lmao.ninja/v3/covid-19/all');
    const data = await res.json();
    
    // get data using an API
    confirmed  = document.getElementById("confirmed");
    confirmed.innerHTML=(data.cases);
    tconfirmed  = document.getElementById("tconfirmed");
    tconfirmed.innerHTML=(data.todayCases);
   // console.log(data.confirmed.value)
    active = document.getElementById("active")
    active.innerHTML=(parseInt(data.cases)-parseInt(data.deaths)-parseInt(data.recovered))
    
    deaths  = document.getElementById("deaths");
     deaths.innerHTML=beautify(data.deaths);
    tdeaths  = document.getElementById("tdeaths");
    tdeaths.innerHTML=(data.todayDeaths);
    
    recovered  = document.getElementById("recovered");
    recovered.innerHTML=beautify(data.recovered);
    trecovered  = document.getElementById("trecovered");
    trecovered.innerHTML=(data.todayRecovered);
    // insert beautified data
     
}

function beautify(num){ //a function to add spaces to separate every three numbers
    var _return = "";
    for (let i = num.toString().length; i>0; i=i-3){
    if (num.toString()[i-1] !== undefined){
        _return += (num.toString()[i-1]) }
    if (num.toString()[i-2] !== undefined){
        _return += (num.toString()[i-2])
        }
    if (num.toString()[i-2] !== undefined){
        _return += (num.toString()[i-3])}    
        _return += (" ")
        
}
return (_return.toString().split("").reverse().join(""))

}








function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var myBar = document.getElementById ("myBar")

myBar.style.width = scrolled + "%";
}

 