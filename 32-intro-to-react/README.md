Intro to React
=============================

## SWBATs
- [x] Recognize declarative and imperative coding paradigms
- [x] Visualize/identify Components on any website
- [x] Explain what a Component is conceptually in the UI
- [x] Briefly explain Babel's purpose in React
- [x] Explain what a React Component actually is in code
- [x] Use JSX to build custom components and render them in the browser
- [x] See how props are to components as arguments are to functions

## Notes

### Declarative vs Imperative Programming

- Declarative - say what you want instead of telling your code exactly how to do that
- Imperative - say exactly what you want your code to do and how to do it

#### Imperative
- How to make a burrito
  1. Steam dat tortilla
  2. Spread bean thing
  3. Smatter rice
  4. Sprinkle protein on rice
  5. Add veggies
  6. Add guac
  7. Add salsa
  8. Add sour cream
  9. Add cheese
  10. Wrap that bad thing

```js
const card = document.createElement("div")
card.className = "card"
card.innerHTML = "<h1>Burrito factory</h1>"

const container = document.querySelector(".container")

container.append(card)

// do it again...
const card = document.createElement("div")
card.className = "card"
card.innerHTML = "<h1>Hello from beef!</h1>"

const container = document.querySelector(".container")

container.append(card)


```
#### Declarative
- How chipotle works:
  1. You tell them what type of burrito container
  2. If burrito, they steam for you
  3. You tell them what rice
  4. You tell them what protein
  5. You tell them what veggies
  6. You tell them toppings
  7. They wrap it up for you

```js
function renderCard(text){
  const card = document.createElement("div")
  card.className = "card"
  card.innerHTML = `<h1>${text}</h1>`

  const container = document.querySelector(".container")

  container.append(card)
}

renderCard("Burrito factory")
renderCard("Hello from beef!")
```


### Absatractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>, 
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>, 
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>, 
  document.getElementById('root')
)
```

## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)
