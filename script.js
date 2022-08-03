console.log("Ahoj")

client = new Paho.MQTT.Client("d57a0d1c39d54550b147b58411d86743.s2.eu.hivemq.cloud",8884,"46396f4b-101b-4619-8ec0-b1b18d57dd6d");

function onConnect() {
    console.log("onConnect");
    client.onMessageArrived = onMessageArrived;
    client.subscribe("/row/#");
}

function onMessageArrived(message) {

    console.log(message.destinationName); //něco tady nehraje
    console.log(message.payloadString);   //tohle by se mělo nejspíš přespat za to dole

    let idUzivatele = document.querySelector("zpravo");
    dosleZpravy.innerHTML += "message.destinationName";

    let dosleZpravy = document.querySelector("zprava");
    dosleZpravy.innerHTML += "message.payloadString";
}

function sendMessage(){
    message = new Paho.MQTT.Message(document.getElementById("text").value);
    message.destinationName = "/row/7/message" ;
    client.send(message);
}

client.connect({
    onSuccess: onConnect,
    userName: "robot",
    password: "P@ssW0rd!",
    useSSL: true
});

const d = new Date();
const e = new Date();
const f = new Date();
let hour = d.getHours();
document.getElementById("demo").innerHTML = hour;
let minutes = e.getMinutes();
document.getElementById("eemo").innerHTML = minutes;
let seconds = f.getSeconds();
document.getElementById("femo").innerHTML = seconds;

//new Audio('zvuk.mp3').play();