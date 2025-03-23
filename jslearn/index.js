

let fullName = "Cai";
let age = 17;
let student = true;
document.getElementById("p1").textContent = `Your name is: ` + fullName;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`; 

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("p1").textContent = `Your username is: ${username}`;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}
const PI = 3.14159
let radius;
let circumference;
// radius = window.prompt("");
radius = Number(radius);
circumference = 2 * pi * radius;
document.getElementById("p3").textContent = circumference;
// username = window.prompt("Whats your username");