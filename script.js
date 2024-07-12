"use strict";

function ocultarMostrar() {
    let boxisq = document.querySelector(".boxisq");
    console.log(boxisq)
    let boxder = document.querySelector(".boxder");
    console.log(boxder)
    if (boxisq.style.visibility === "hidden") {
        boxisq.style.visibility = "visible";
        boxder.style.visibility = "hidden";
    } else {
        boxisq.style.visibility = "hidden";
        boxder.style.visibility = "visible";
    }
}