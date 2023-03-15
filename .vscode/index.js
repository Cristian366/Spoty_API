const contenedor = document.getElementById('contenedor')
const btnLoad = document.getElementById('btnLoad')
const cardMusic = document.getElementById('cardMusic').content
const fragment = document.createDocumentFragment()
const paises = document.getElementById('paises')
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

    
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?coutry=${paise.value}', options)
        .then(response => response.json())
        .then(response => {
            canciones = response
            console.log(canciones)
            //creaTarjetas
        })
        .catch(err => console.log(err));
})
 
const creaTarjetas = () => {
    contenedor.innerHTML = ''
    canciones.forEach((item) => {
        console.log(item)
        cardMusic.querySelector('img').setAttribute('src',trackMetadata.displayImageUri)
        cardMusic.querySelector('p').textContent = item.trackName
        const clone = cardMusic.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenedor.appendChild(fragment) 
}

