const express = require ('express')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, ()  => {
    console.log(`Express port: ${PORT}`)
})

app.get('/greeting/:user', (req, res) =>{
    res.send(`Hello, ${req.params.user}`)
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
//thanks mdn web docs.

app.get('/roll/:num', (req, res)=>{
    res.send(`You rolled, out of ${req.params.num}, a ${getRandomInt(req.params.num)}`)
})

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:id', (req, res) =>{
    res.send(collectibles[req.params.id])
})

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res)=>{
    if (req.query.minPrice !== undefined){
    const result = shoes.filter(shoes => shoes.price >= req.query.minPrice)
    res.send(result)}else{
        res.send(shoes)
    }
})



app.get('/*', (req, res) => {
    res.send({
        error:'404'
    })
})