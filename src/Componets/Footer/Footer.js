import "./styles.css";
import logo1 from "../../assets/imgs/facebook.png";
import logo2 from "../../assets/imgs/github.png";
import logo3 from "../../assets/imgs/instagram.png";
import logo4 from "../../assets/imgs/linkedin.png";

const Footer = ()=>{
    const view = `
    <div class="container-footer1">
    <span class="span-tex1">Creado por: </span>
    <div class="data-footer">
      <span class="span-tex2">Jeison Cabarcas</span>
      <span class="span-tex3">ancjeison@gmail.com</span>
    </div>
  </div>
  <div class="container-footer2">
    <span class="span-tex1">Mis redes</span>
   <div class="redes">
   <a href="https://www.facebook.com/jeison.cabarcas.9"><img src="${logo1}" alt="Facebook" /></a>
   <a href="https://github.com/JeisonCabarcasP"><img src="${logo2}" alt="GitHub" /></a>
   <a href="https://www.instagram.com/jeisoncabarcas/"><img src="${logo3}" alt="Instagram" /></a>
   <a href="https://www.linkedin.com/in/jeisoncabarcas/"><img src="${logo4}" alt="Linkedin" /></a>
   </div>
        
  </div>`;
    return view;
    }
    export default Footer;