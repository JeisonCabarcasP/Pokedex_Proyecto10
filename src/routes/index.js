import Header from "../componets/Header/Header";
import Footer from "../Componets/Footer/Footer";
import Home from "../views/Home/Home";

const router = async (route) => {

    //Componentes
    const header = document.querySelector("#header");
    header.innerHTML = await Header();
    const footer = document.querySelector("#footer");
    footer.innerHTML = await Footer();

    //vistas
    const main = document.querySelector('#main');
    main.innerHTML = await Home(); 
}

export default router;