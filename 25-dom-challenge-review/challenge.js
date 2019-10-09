const controls = document.querySelector("#controls")
const counter = document.querySelector("#counter")
const form = document.querySelector("#comment-form")
const list = document.querySelector("#list")
const likeList = document.querySelector(".likes")

const alreadyLiked = {}

let intervalNumber;

controls.addEventListener("click", function(e){
  if(e.target.id === "plus"){
    changeCounter(1)
  } else if(e.target.id === "minus"){
    changeCounter(-1)
  } else if(e.target.id === "pause"){
    if(e.target.innerText === "pause"){
      clearInterval(intervalNumber)
      e.target.innerText = "resume"
      toggleButtons(e.target, true)
    } else {
      e.target.innerText = "pause"
      toggleButtons(e.target, false)
      startInterval()
    } 
  } else if(e.target.id === "heart"){
    const currentNum = counter.innerText

    if(alreadyLiked[currentNum]){
      alreadyLiked[currentNum]++

      // const spans = document.querySelectorAll("span")
      // let targetSpan

      // spans.forEach(function(span){
      //   if(span.dataset.num === currentNum){
      //     targetSpan = span
      //   }
      // })

      let targetSpan = document.querySelector(`span[data-num='${currentNum}']`)

      targetSpan.innerText = alreadyLiked[currentNum] + " times"


    } else {
      alreadyLiked[currentNum] = 1
      likeList.insertAdjacentHTML("beforeend", `
        <li>${currentNum} has been liked <span data-num=${currentNum}>1 time</span></li>
      `)
    }


  }
})


form.addEventListener("submit", function(e){
  e.preventDefault()
  const newComment = e.target.comment.value

  list.insertAdjacentHTML("beforeend", `<li>${newComment}</li>`)

  e.target.reset()
})

function startInterval(){
  intervalNumber = setInterval(function(){ 
    changeCounter(1)
  }, 1000)
}

function toggleButtons(node, bool){

  const buttons = document.querySelectorAll("button")
  buttons.forEach(function(button){
    if(button !== node){
      button.disabled = bool
    }
  })
}


function changeCounter(value){
  const newValue = parseInt(counter.innerText) + value
  counter.innerText = newValue
}


startInterval()

