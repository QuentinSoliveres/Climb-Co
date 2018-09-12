var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const shoesList = [
      { id: 0, title: 'Katana', brand: 'La Sportiva',  price: 135, image: 'images/katana.jpg', description:"put some desc here!! just to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to fill"},
      { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115, image: 'images/Boostic.jpg',  description:"put some desc here!!"},
      { id: 2, title: 'Bandit', brand: 'Evolv', price: 94, image: 'images/Bandit.jpg', description:"put some desc here!!" } ,
      { id: 3, title: 'Rock Pillars', brand: 'Diamond',  price: 120, image: 'images/rock-pillars.jpg', description:"put some desc here!!" }
    ]
const ropeList = [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ]
const harnessesList = [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ]
const descendersList = [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ]
const carabinersList = [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ]
const helmetsList = [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ]
const userList = [
	  { id: 0, username: 'admin', password: 'admin', cart: { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115}},
      { id: 1, username: 'user', password: 'user' , cart: { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115}},
      { id: 2, username: 'random', password: '123',  cart: { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115}} ,
      { id: 3, username: 'test', password: 'rate',  cart: { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115}}
]

router.get('/shoesList', (req, res) => {
  res.json(shoesList)
})

router.get('/ropeList', (req, res) => {
  res.json(ropeList)
})

router.get('/harnessesList', (req, res) => {
  res.json(harnessesList)
})

router.get('/descendersList', (req, res) => {
  res.json(descendersList)
})

router.get('/carabinersList', (req, res) => {
  res.json(carabinersList)
})

router.get('/helmetsList', (req, res) => {
  res.json(helmetsList)
})

router.post('/connect', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const found = false
  for (var i = 0; i < userList.length; i++) {
  	if (userList[i].username === username && password === userList[i].password){
  		res.status(200).send(userList[i].cart)
  		found = true
  	}
  }
  	if (found === false) {
  		console.log('not connect')
  		res.status(400).send('Bouuuh mauvais mdp')
  	}
})

router.post('/subscribe', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const passwordConfirm = req.body.passwordConfirm
  if (passwordConfirm === password) {
    res.status(200).send ('send pour voir ')
  } else {
    res.status(400).send('Bouuuh mauvais mdp')
  }
})

  module.exports = router;
