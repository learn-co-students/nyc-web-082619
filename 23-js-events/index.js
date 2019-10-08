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

function renderGame(game){
  container.insertAdjacentHTML("beforeend", `
    <div class="tile">
      <h4>${game.name}</h4>
      <p>${game.description}</p>
      <p>Likes: <span class="counter">0</span></p>
      <div class="image-wrapper">
        <img src="${game.img_url}" alt="catan">
      </div>
      <button class="like button">Like</button>
      <button class="dislike button">Like</button>
    </div>
  `)
}


// 1. Grab the container div
const container = document.querySelector("#container")
// 2. Iterate over `data`
// 3. For each element, use HTML template and interpolate values from the element with insertAdjacentHTML
data.forEach(renderGame) // this is where stuff gets added to the page



// const button = document.querySelector(".like")

// button.addEventListener("click", function(){
//   const counter = document.querySelector("#counter")
//   const num = parseInt(counter.innerText)

//   counter.innerText = num + 1
// })


// Find all the buttons, iterate over them to add event listeners, then in each event listener find matching span counter and change innerText
// const buttons = document.querySelectorAll(".like")

// buttons.forEach(function(button, index){
//   button.addEventListener("click", function(){
//     const counters = document.querySelectorAll("#counter")


//     const num = parseInt(counters[index].innerText)
//     counter[index].innerText = num + 1
//   })
// })

const tiles = document.querySelectorAll(".tile")

tiles.forEach(function(tile){
  const button = tile.querySelector("button.like")

  button.addEventListener("click", function(event){
    console.log(event.target)
    const counter = tile.querySelector("span.counter")

    const num = parseInt(counter.innerText)
    counter.innerText = num + 1
  })
})




/*
<div class="tile">
  <h4>name</h4>
  <p>description</p>
  <p>Likes: <span>0</span></p>
  <div class="image-wrapper">
    <img src="img_url" alt="catan">
  </div>
  <button class="like button">Like</button>
</div>
*/








