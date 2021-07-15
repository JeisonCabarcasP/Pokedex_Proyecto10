import router from "./routes/index"

window.addEventListener("load", router(window.location.hash));
console.log("Hola Jeison");