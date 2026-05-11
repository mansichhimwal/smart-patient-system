let currentID="";

// Generate ID
function generateID(){
    currentID="P"+Math.floor(Math.random()*10000);
    document.getElementById("idDisplay").innerText=currentID;
}

// Save medicine
function saveData(){
    let med=document.getElementById("medicine").value;
    let time=document.getElementById("time").value;

    let data=JSON.parse(localStorage.getItem(currentID))||[];

    data.push({medicine:med,time:time,taken:false});

    localStorage.setItem(currentID,JSON.stringify(data));

    showData();
}

// Show guardian records
function showData(){
    let list=document.getElementById("list");
    if(!list)return;

    let data=JSON.parse(localStorage.getItem(currentID))||[];
    list.innerHTML="";

    data.forEach(item=>{
        let li=document.createElement("li");
        li.innerText=item.medicine+" at "+item.time;
        list.appendChild(li);
    });
}

// Patient start
function start(){
    let id=document.getElementById("pid").value;
    loadPatient(id);
    alarmSystem(id);
}

// Load patient data
function loadPatient(id){
    let data=JSON.parse(localStorage.getItem(id))||[];
    let ul=document.getElementById("data");

    ul.innerHTML="";

    data.forEach((item,i)=>{
        let li=document.createElement("li");

        li.innerHTML=`
        ${item.medicine} at ${item.time}
        <button onclick="taken('${id}',${i})">Taken</button>
        `;

        ul.appendChild(li);
    });
}

// Mark taken
function taken(id,i){
    let data=JSON.parse(localStorage.getItem(id));
    data[i].taken=true;
    localStorage.setItem(id,JSON.stringify(data));

    stopAlarm();
    loadPatient(id);
}

// REAL ALARM SYSTEM
function alarmSystem(id){
    setInterval(()=>{
        let data=JSON.parse(localStorage.getItem(id))||[];
        let now=new Date().toTimeString().slice(0,5);

        data.forEach(item=>{
            if(item.time===now && !item.taken){
                playAlarm();
            }
        });
    },10000);
}

// Play alarm
function playAlarm(){
    let a=document.getElementById("alarm");
    a.currentTime=0;
    a.play();
}

// Stop alarm
function stopAlarm(){
    let a=document.getElementById("alarm");
    a.pause();
    a.currentTime=0;
}

// AUTO WEATHER (REAL API)
navigator.geolocation.getCurrentPosition(pos=>{
    let lat=pos.coords.latitude;
    let lon=pos.coords.longitude;

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    .then(res=>res.json())
    .then(data=>{
        let temp=data.current_weather.temperature;

        let weather=document.getElementById("weather");
        if(weather){
            weather.innerText="Temperature: "+temp+"°C";
        }
        let alarmEnabled = false;

window.enableAlarm = function(){
    alarmEnabled = true;
    alert("Alarm Enabled");
    function flashScreen(){
    document.body.style.background = "red";

    setTimeout(()=>{
        document.body.style.background = "";
    },500);
}
function flashScreen(){
    document.body.style.background = "red";

    setTimeout(()=>{
        document.body.style.background = "";
    },500);
}
}
    });
});