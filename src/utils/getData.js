const URI = 'https://pokeapi.co/api/v2/pokemon/';

const getData = async (pokemon) => {

    const URL_SEARCH = `${URI}${pokemon}`;
    console.log(`URL para ser consultada por el API: ${URL_SEARCH}`);
    try{
        const response = await fetch(URL_SEARCH);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.error('Error get Data',error);
    } 
}

export default getData;