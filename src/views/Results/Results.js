import "./styles.css";
import getData from "../../utils/getData";

const Results = async() => {

    let userInput = localStorage.getItem('userSearch');
    const pokemon = await getData(userInput);
    let peso = `${pokemon.weight}`/10;
    let altura = `${pokemon.height}`/10;
    const view = `
    <div class="container--results">
        <h1>¡Encontramos a tu Pokemon!</h1>
        <div class="result-title"><img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="pokemon"></div>
        <div class="item-container">
        <div class="result-title"><span>${pokemon.name} </span><span>N° ${pokemon.id}</span></div>
        <div class="result-title"><span>Tipo: </span><span>${pokemon.types[0].type.name}</span></div>
        <div class="result-title"><span>Peso: </span><span>${peso} kg</span></div>
        <div class="result-title"><span>Altura: </span><span>${altura} m</span></div>
        <div class="result-title"><span>Area: </span><span>${pokemon.location_area_encounters}</span></div>
        </div>
    </div>`;
    return view;
}
export default Results;