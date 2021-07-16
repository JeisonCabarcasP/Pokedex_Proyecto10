import router from "../../routes/index";
import "./styles.css";
import logo from "../../assets/imgs/Pokemon.png";
const Search = () => {
  const view = `
            <div class="search">
                <h1 class="search-title"><img src="${logo}" alt="Logo"></h1>
                <input placeholder="Ingresa tu pokemon" class="search-input" id="search-input" type="text">
                <div class="search-buttons">   
                     <a href="#results"><button class="search-button">¡Encuentralo ya!</button></a>
                </div>
            </div>
      `;

  document.addEventListener('click', () => {
    const userSearch = document.getElementById("search-input").value;
    localStorage.setItem('userSearch', userSearch);
  });

  document.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {
     console.log("Hola jeison")
     const userSearch = document.getElementById("search-input").value;
     localStorage.setItem('userSearch', userSearch);
     //router("#results");
    }
  });

  return view;
};
export default Search;