import router from "./routes/index"
import Results from "./views/Results/Results";
import "./assets/global.css"


window.addEventListener("load", router(window.location.hash));
window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
  
console.log("Hola Jeison");