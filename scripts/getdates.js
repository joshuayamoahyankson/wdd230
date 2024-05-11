
let para = document.querySelector("p");

let cur_Year = new Date().getFullYear();

para.textContent = "\u00A9" + cur_Year;

let para_2 = document.getElementById("lastModified");

let lastModified = document.lastModified;

para_2.textContent = "Last Modification: " + lastModified;

