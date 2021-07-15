
//Componentes
import Header from "../componets/Header/Header";
import Footer from "../Componets/Footer/Footer";

//vistas
import Home from "../views/Home/Home";
import Results from "../views/Results/Results";

// const routes = {
//     '': Homepage,
//     '#home': Homepage,
//     '#results': Results
// };

const router = async (route) => {

    //Componentes
    const header = document.querySelector("#header");
    header.innerHTML = await Header();
    const footer = document.querySelector("#footer");
    footer.innerHTML = await Footer();

    //vistas
    const main = document.querySelector('#main');
    main.innerHTML = await Home(); 

    const search = document.querySelector('#prueba');
    search.innerHTML = await Results(); 
}

export default router;