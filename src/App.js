import router from "./routes/index"
import "./assets/global.css"


window.addEventListener("load", router(window.location.hash));
console.log("Hola Jeison");