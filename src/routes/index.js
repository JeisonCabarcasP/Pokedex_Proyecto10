import Header from "../componets/Header/Header";



const router = async (route) =>{

   //Componentes
   const header = document.querySelector("header");
   header.innerHTML=await Header();
}

export default router;