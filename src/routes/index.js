
//Componentes
import Header from "../componets/Header/Header";
import Footer from "../Componets/Footer/Footer";

//vistas
import Home from "../views/Home/Home";
import Results from "../views/Results/Results";

 const routes = {
     '': Home,
     '#home': Home,
     '#results': Results
 };

const router = async (route) => {

    //Componentes
    const header = document.querySelector("#header");
    header.innerHTML = await Header();
    const footer = document.querySelector("#footer");
    footer.innerHTML = await Footer();

    //vistas
    const main = document.querySelector('#main');
    let render = routes[route] ? routes[route] : Home;
    main.innerHTML = await render(); 
}

export default router;