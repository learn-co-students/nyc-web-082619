class Person {
  constructor(name, age, birfday, job){
    this.name = name
    this.age = age
    this.birfday = birfday
    this.job = job
    this.id = Person.id
    this.element = "some DOM NODE"

    Person.id++
    Person.all.push(this)
  }

  sleep(time){
    console.log(`${this.name} is going to sleep!`)

    setTimeout(function(){
      console.log(`${this.name} is waking up!`)
    }, time)
  }

  // static all = []

  // static sup(){
  //   console.log("fam")
  // }
}

Person.all = []
Person.id = 1

const beefy = new Person("Beefy McSteaker", 32, "01/01/1917", "Vegan Activist")
const letty = new Person("Letty McCabber", 2, "01/01/1947", "Extreme eating champion")

// function Person(name, age, birfday, job){
//     this.name = name
//     this.age = age
//     this.birfday = birfday
//     this.job = job
//   }

// Person.prototype.sleep = function(time){
//   console.log(`${this.name} is going to sleep!`)

//   setTimeout(function(){
//     console.log(`${this.name} is waking up!`)
//   }, time)
// }


