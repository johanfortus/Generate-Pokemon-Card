let form = document.querySelector('form');
let input = document.querySelector('input');
let image = document.querySelector('img')
let restartButton = document.querySelector(".restart")

let power1 = document.querySelector('.power1')
let power1list = document.querySelector('.power1list')

let power2 = document.querySelector('.power2')
let power2list = document.querySelector('.power2list')

let $cardTitle = $(".card-title")
let cardTitle = document.querySelector(".card-title")
let $cardText = $(".card-text")

let height = document.querySelector(".height")

let card = document.querySelector(".card")
let cardBody = document.querySelector(".card-body")

let imgType = document.querySelector('.img-type')

async function getTypes(){
    let types = await axios.get("https://pokeapi.co/api/v2/type/");
    console.log(types.data.results)
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();
   
    
    let userInput = input.value;  
    userInput = userInput.toLowerCase();

    
    let pName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
    console.log(pName)
    console.log("User input: ", userInput)
    console.log(pName.data.sprites.front_default);
    image.src = pName.data.sprites.front_default
    $cardText.empty();
    $cardTitle.empty();
    cardTitle.innerHTML = pName.data.name;
    

    power1.innerHTML = "Abilities"
    let ability1 = document.createElement("li");
    let ability2 = document.createElement("li");
    ability1.innerHTML = pName.data.abilities[0].ability.name
    ability2.innerHTML = pName.data.abilities[1].ability.name
    power1.append(ability1)
    power1.append(ability2)

    power2.innerHTML = "Moves"
    let move = document.createElement("li");
    move.innerHTML = pName.data.moves[0].move.name
    power2.append(move)

    height.innerHTML = `Height: ${pName.data.height}ft    Weight: ${pName.data.weight}lb`

    let power1desc = pName

    console.log(card.getAttribute('class'))
    card.classList.remove('bg-light')
    
    if(pName.data.types[0].type.name === "electric"){
        card.style.background = "yellow"
        cardTitle.style.color = "black"
        cardBody.style.color = "black"
    }
    else if(pName.data.types[0].type.name === "grass" || pName.data.types[0].type.name === "grass"){
        card.style.background = "rgb(2, 202, 2)"
        cardTitle.style.color = "white"
        cardBody.style.color = "black"
    }
    else if(pName.data.types[0].type.name === "water"){
        card.style.background = "rgb(0, 187, 255)"
        cardTitle.style.color = "white"
        cardBody.style.color = "black"
    }
    else if(pName.data.types[0].type.name === "dragon" || pName.data.types[0].type.name === "fire"){
        card.style.background = "red"
        cardTitle.style.color = "black"
        cardBody.style.color = "black"
    }
    else if(pName.data.types[0].type.name === "psychic" || pName.data.types[0].type.name === "fairy"){
        card.style.background = "rgb(229, 53, 229)"
        cardTitle.style.color = "black"
        cardBody.style.color = "black"
    }
    else if(pName.data.types[0].type.name === "dark" || pName.data.types[0].type.name === "ghost"){
        card.style.background = "rgb(68, 35, 76)"
        cardTitle.style.color = "black"
        cardBody.style.color = "black"
    }
    else if(pName.data.types[0].type.name === "steel"){
        card.style.background = "silver"
        cardTitle.style.color = "black"
        cardBody.style.color = "black"
    }
    else if(pName.data.types[0].type.name === "fighting" || pName.data.types[0].type.name === "rock" || pName.data.types[0].type.name === "ground" ){
        card.style.background = "orange"
        cardTitle.style.color = "white"
        cardBody.style.color = "black"
    }
    
})



