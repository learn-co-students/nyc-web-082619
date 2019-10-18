fetch("http://localhost:3000/api/v1/games")
.then(function(response){
  return response.json()
})
.then(function(data){
  data.forEach(renderGame);
})

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

    fetch(`http://localhost:3000/api/v1/games/${event.target.dataset.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({likes: newCount})
    })
    .then(function(res){

      if (res.status !== 200){
        throw new Error("Beefy McSteaker!!!")
      }

      return res.json()
    })
    .then(function(data){
      span.innerText = data.likes 
    })
    .catch(function(error){
      alert(error)
    })


  } else if(event.target.dataset.action === "delete"){
    const tile = event.target.closest(".tile")
    tile.remove()
  }
})
document.querySelector("#new-game").addEventListener("submit", function(event){
  event.preventDefault()

  const name = event.target.name.value
  const description = event.target.description.value
  const img_url = event.target.img_url.value

  const body = {
    name: name, 
    description: description, 
    img_url: img_url,
    likes: 0
  }

  fetch("http://localhost:3000/api/v1/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(function(data){
    if (data.errors){
      document.body.append(data.errors)
    } else {
      renderGame(data)
    }
  })

})
