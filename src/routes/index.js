import Header from "../componets/Header/Header";
import Footer from "../Componets/Footer/Footer";


const router = async (route) =>{

   //Componentes
   const header = document.querySelector("header");
   header.innerHTML=await Header();
   const footer = document.querySelector("footer");
   footer.innerHTML=await Footer();
}

export default router;