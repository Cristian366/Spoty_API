const contenedor = document.getElementById('contenedor')
const btnLoad = document.getElementById('btnLoad')
const cardMusic = document.getElementById('cardMusic').content
const fragment = document.createDocumentFragment()
let canciones = []

btnLoad.addEventListener('click', () => {
    console.log('evento')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '038de8e34amshc0ea4e0bac5fef3p1817edjsnbc980d3ccc7b',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            canciones = response
            console.log(canciones)
            //creaTarjetas
        })
        .catch(err => console.log(err));
})
 min26
