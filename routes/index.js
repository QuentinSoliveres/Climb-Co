var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const shoesList = [
      { id: 0, title: 'Katana', brand: 'La Sportiva',  price: 135, image: 'images/katana.jpg', description:"put some desc here!! just to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to fill"},
      { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115, image: 'images/Boostic.jpg',  description:"put some desc here!!"},
      { id: 2, title: 'Bandit', brand: 'Evolv', price: 94, image: 'images/Bandit.jpg', description:"put some desc here!!" },
      { id: 3, title: 'Rock Pillars', brand: 'Diamond',  price: 120, image: 'images/rock-pillars.jpg', description:"put some desc here!!" }
    ]
const ropeList = [
      { id: 0, title: 'Volta', brand: 'Scarpa', price: 10, image: 'images/corde3.jpg', description:"Corde de haute resistance vous garantissant une sécurité optimale. Supporte une charge de 150 kilos."},
      { id: 1, title: 'Cobra', brand: 'Scarpa', price: 30, image: 'images/corde4.jpg', description:"Corde de haute resistance vous garantissant une sécurité optimale. Supporte une charge de 300 kilos."},
      { id: 2, title: 'Rando', brand: 'Evolv', price: 5, image: 'images/corde2.jpg'},
      { id: 3, title: 'Contact II', brand: 'La Sportiva', price: 7,image: 'images/corde1.jpg'}
    ]
const harnessesList = [
      { id: 0, title: 'Primrose Harness', brand: 'Evolv', price: 30, image: 'images/harnesse1.png'},
      { id: 1, title: 'Primrose Harness Evolutiv', brand: 'Evolv', price: 40, image: 'images/harnesse2.png'},
      { id: 2, title: 'Corax Climbing', brand: 'Diamond', price: 159, image: 'images/harnesse3.jpeg'},
      { id: 3, title: 'Ophid Climbing', brand: 'Diamond', price: 179, image: 'images/harnesse4.jpeg'}
    ]
const descendersList = [
      { id: 0, title: 'Sparrow 200', brand: 'Petzl', price: 49, image: 'images/descender1.jpg'},
      { id: 1, title: 'Petzl Alu', brand: 'Petzl', price: 9, image: 'images/descender3.jpg'},
      { id: 2, title: 'Pimaro 9000', brand: 'Scarpa', price: 54, image: 'images/descender2.jpg'},
      { id: 3, title: 'Primaro 750', brand: 'Petzl', price: 11, image: 'images/descender4.jpg'}
    ]
const carabinersList = [
      { id: 0, title: 'Petzl Apach', brand: 'Petzl', price: 13, image: 'images/carabiner1.jpg'},
      { id: 1, title: 'Petzl Onix', brand: 'Petzl', price: 19, image: 'images/carabiner2.jpeg'},
      { id: 2, title: 'Climb&Co Carabiners REF1', brand: 'Climb&Co', price: 5, image: 'images/carabiner3.jpg'},
      { id: 3, title: 'Climb&Co Carabiners REF2', brand: 'Climb&Co', price: 5, image: 'images/carabiner4.jpg'}
    ]
const helmetsList = [
      { id: 0, title: 'La sportiva rope', brand: 'Petzl', price: 79, image: 'images/helmet1.jpg', description: "Casque d'escalade conçu pour l'alpinisme et la spéologie, le casque possède une double commande réglable avec ventilation latéral."},
      { id: 1, title: 'Scarpa rope', brand: 'Petzl', price: 59, image: 'images/helmet4.jpg', description: "Casque d'escalade haut de gamme idéal pour l'alpinisme. Commande de sécurité réglable avec système autoblocant."},
      { id: 2, title: 'Climb&Co Helmet Red', brand: 'Climb&Co', price: 29, image: 'images/helmet2.jpg', description: "Notre casque d'escalade modèle adulte a été conçu spécialement pour vous permettre de grimper en toute sérénité et sécurité. Le casque respecte toutes les normes lié à la bonne pratique du sport."},
      { id: 3, title: 'Climb&Co Helmet Blue', brand: 'Climb&Co', price: 19, image: 'images/helmet3.jpg', description: "Notre casque d'escalade modèle enfant a été conçu spécialement pour vous permettre de grimper en toute sérénité et sécurité. Le casque respecte toutes les normes lié à la bonne pratique du sport."}
    ]
const userList = [
	  { id: 0, username: 'admin', password: 'admin', cart: { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115}},
      { id: 1, username: 'user', password: 'user' , cart: { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115}},
      { id: 2, username: 'random', password: '123',  cart: { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115}},
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
