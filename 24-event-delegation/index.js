const data = [
  {
    id: 1,
    name: "Settlers of Catan",
    description: "Friendships will be tested.",
    img_url: "https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg"
  },
  {
    id: 2,
    name: "Monopoly",
    description: "Friendships will end.",
    img_url: "https://i5.walmartimages.com/asr/e9009e67-fbb0-4e96-83c5-5af0eeb13b28_1.f17117ff29f8aa4992cb93bad9205dc4.jpeg"
  },
  {
    id: 3,
    name: "Azul",
    description: "Great fun with the friends!.",
    img_url: "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg"
  }
]

const container = document.querySelector("#container")

data.forEach(renderGame);

function renderGame(game){
  const str = `
    <div class="tile">
      <h4>${game.name}<button data-action="delete" class="close">X</button></h4> 
      <p>${game.description}</p>
      <div class="image-wrapper">
        <img src="${game.img_url}" alt="${game.name}">
      </div>
      <p>Likes: <span class="count">0</span></p>

      <button data-action="like" data-id=${game.id} class="like button">Like</button>
    </div>`

  container.insertAdjacentHTML("beforeend", str)
}

container.addEventListener("click", function(event){
  // console.dir(event.target.dataset)

  if(event.target.dataset.action === "like"){
    // closest looks up the DOM tree for the closest PARENT node that matches the selector
    const span = event.target.closest(".tile").querySelector("span.count")

    let newCount = parseInt(span.innerText) + 1

    span.innerText = newCount
  } else if(event.target.dataset.action === "delete"){
    const tile = event.target.closest(".tile")
    tile.remove()
  }
})

document.querySelector("#new-game-form").addEventListener("submit", function(event){
  event.preventDefault()
  console.log("NAME: ", event.target.beef.value)
  console.log("DESCRIPTION: ", event.target.description.value)
  console.log("IMG URL: ", event.target.img_url.value)
})


// document.querySelector(".like").addEventListener("click", function(event){
//   event.stopPropagation()
//   console.log("BUTTON", event.target)

//   // Adds like
// })


// document.querySelector(".tile").addEventListener("click", function(event){
//   console.log("TILE", event.target)

//   // code that redirects to some other page
// })
