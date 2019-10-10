function sleep(time){
  const start = new Date()
  while (new Date() - start < time){}
}


// console.log("BEFORE TIMEOUT")

// // setTimeout(function(){
// //   console.log("FINALLYLYYY!!!")
// // }, 5000) // non blocking

// // sleep(5000) // blocking


// fetch("https://pokeapi.co/api/v2/pokemon/122")
// .then(function(response){ 
//   return response.json() // JSON.parse of JS
// })
// .then(function(data){
//   document.body.append(data.name)
// })



// console.log("AFTER TIMEOUT")





// const data = [
//   {
//     id: 1,
//     name: "Settlers of Catan",
//     description: "Friendships will be tested.",
//     img_url: "https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg"
//   },
//   {
//     id: 2,
//     name: "Monopoly",
//     description: "Friendships will end.",
//     img_url: "https://i5.walmartimages.com/asr/e9009e67-fbb0-4e96-83c5-5af0eeb13b28_1.f17117ff29f8aa4992cb93bad9205dc4.jpeg"
//   },
//   {
//     id: 3,
//     name: "Azul",
//     description: "Great fun with the friends!.",
//     img_url: "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg"
//   }
// ]

fetch("http://localhost:3000/games")
.then(function(response){
  return response.json()
})
.then(function(data){
  // do stuff here
  data.forEach(renderGame);
})
// .catch(function(error){
//   alert("SOMETHING'S WRONG")
// })

const container = document.querySelector("#container")

function renderGame(game){

  const str = `
    <div class="tile">
      <h4>${game.name}<button data-action="delete" class="close">X</button></h4> 
      <p>${game.description}</p>
      <div class="image-wrapper">
        <img src="${game.img_url}" alt="${game.name}">
      </div>
      <p>Likes: <span class="count">${game.likes}</span></p>

      <button data-action="like" data-id=${game.id} class="like button">Like</button>
    </div>`

  container.insertAdjacentHTML("beforeend", str)
}

container.addEventListener("click", function(event){
  if(event.target.dataset.action === "like"){
    const span = event.target.closest(".tile").querySelector("span.count")

    let newCount = parseInt(span.innerText) + 1

    // SEND A PATCH to /games/:id
    fetch(`http://localhost:3000/games/${event.target.dataset.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({beef: newCount})
    })

    span.innerText = newCount


  } else if(event.target.dataset.action === "delete"){
    const tile = event.target.closest(".tile")
    tile.remove()
  }
})
document.querySelector("#new-game").addEventListener("submit", function(event){
  event.preventDefault()
  console.log("NAME: ", event.target.name.value)
  console.log("DESCRIPTION: ", event.target.description.value)
  console.log("IMG URL: ", event.target.img_url.value)
})
