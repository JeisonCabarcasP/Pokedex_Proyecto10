import "./styles.css";
import getData from "../../utils/getData";

const Results = async() => {

    let userInput = localStorage.getItem('userSearch');
    const pokemon = await getData(userInput);
    let peso = `${pokemon.weight}`/10;
    let altura = `${pokemon.height}`/10;
    const view = `
    <div class="main-title"><h1>¡Encontramos a tu Pokemon!</h1></div>
    <div class="container-results">
        <div class="conatiner-img"><img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="pokemon"></div>
        <div class="item-container">
        <div class="result-name"><span>${pokemon.name} </span><span>N° ${pokemon.id}</span></div>
        <div class="container-data" >
        <div class="container-data1">   
             <div class="result-type"><span>Tipo: </span><span>${pokemon.types[0].type.name}</span></div>
        <div class="result-weight"><span>Peso: </span><span>${peso} kg</span></div></div>
        <div class="container-data2">
         <div class="result-height"><span>Altura: </span><span>${altura} m</span></div>
        <div class="result-moves"><span>Movimientos principales: </span><br>
        <span>${pokemon.moves[0].move.name}, ${pokemon.moves[1].move.name},<br> ${pokemon.moves[2].move.name}, ${pokemon.moves[3].move.name}</span></div></div> </div>
       
        </div>
    </div>`;
    return view;
}
export default Results;