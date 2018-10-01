var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const shoesList = [
      { id: 0, title: 'Katana', brand: 'La Sportiva',  price: 135, image: 'images/katana.jpg', description:"Chaussures de haute résistance en caoutchouc renforcé et fabriqué en allemagne pour un maximum de sécurité pendant votre pratique du sport."}, 
      { id: 2, title: 'Bandit', brand: 'Evolv', price: 94, image: 'images/Bandit.jpg', description:"Matériaux haut de gamme, developpé en laboratoire et assemblé àla colle extra forte." },
      { id: 3, title: 'Rock Pillars', brand: 'Diamond',  price: 120, image: 'images/rock-pillars.jpg', description:"Chaussures d'escalade destiné aux grimpeurs d'extérieurs, matériaux en caoutchouc et semelle en acier flexible." }
    ]
const ropeList = [
      { id: 0, title: 'Volta', brand: 'Scarpa', price: 10, image: 'images/corde3.jpg', description:"Corde de haute resistance vous garantissant une sécurité optimale. Supporte une charge de 150 kilos."},
      { id: 1, title: 'Cobra', brand: 'Scarpa', price: 30, image: 'images/corde4.jpg', description:"Corde de haute resistance vous garantissant une sécurité optimale. Supporte une charge de 300 kilos."},
      { id: 2, title: 'Rando', brand: 'Evolv', price: 5, image: 'images/corde2.jpg', description: "Corde de longueur de 15 mètres"},
      { id: 3, title: 'Contact II', brand: 'La Sportiva', price: 7,image: 'images/corde1.jpg', description: "Corde de 50 mètres"}
    ]
const harnessesList = [
      { id: 0, title: 'Primrose Harness', brand: 'Evolv', price: 30, image: 'images/harnesse1.png', description:"Appareil pour hommes et femmes de sécurité d'escalade réglable pour toute taille. Grimpez en toute sécurité avec notre appareil ayant passé une série de test supportant des charges allant jusqu'à 1 tonne. Couleur rouge."},
      { id: 1, title: 'Primrose Harness Evolutiv', brand: 'Evolv', price: 40, image: 'images/harnesse2.png', description:"Appareil pour hommes et femmes de sécurité d'escalade réglable pour toute taille. Grimpez en toute sécurité avec notre appareil ayant passé une série de test supportant des charges allant jusqu'à 1 tonne. Couleur bleu."},
      { id: 2, title: 'Corax Climbing', brand: 'Diamond', price: 159, image: 'images/harnesse3.jpeg', description:"Produit développé spécialement pour les enfants de moins de 12 ans. Ne cause de dommages corporelles liés à la croissance avec un bon maintien une fois en hauteur. Couleur orange."},
      { id: 3, title: 'Ophid Climbing', brand: 'Diamond', price: 179, image: 'images/harnesse4.jpeg', description:"Produit développé spécialement pour les enfants de moins de 12 ans. Ne cause de dommages corporelles liés à la croissance avec un bon maintien une fois en hauteur. Couleur bleu."}
    ]
const descendersList = [
      { id: 0, title: 'Sparrow 200', brand: 'Petzl', price: 49, image: 'images/descender1.jpg', description:"Descendeur en acier trempé haute résistance orange. Usage professionnel uniquement."},
      { id: 1, title: 'Petzl Alu', brand: 'Petzl', price: 9, image: 'images/descender3.jpg', description:"Descendeur en acier trempé haute résistance or. Usage professionnel uniquement."},
      { id: 2, title: 'Pimaro 9000', brand: 'Scarpa', price: 54, image: 'images/descender2.jpg',description:"Découvrez un outil professionnel d'escalade et de randonnée alpine vous garantissant une grande fiabilité. Voir guide d'utilisation avant la première utilisation. Outil disponible dans une seule couleur (gris et orange)."},
      { id: 3, title: 'Primaro 750', brand: 'Petzl', price: 11, image: 'images/descender4.jpg', description:"Descendeur en acier trempé haute résistance or. Usage professionnel et récréatif."}
    ]
const carabinersList = [
      { id: 0, title: 'Petzl Apach', brand: 'Petzl', price: 13, image: 'images/carabiner1.jpg', description:"Conçu pour confectionner une dégaine ou accrocher un accessoire sur son harnais."},
      { id: 1, title: 'Petzl Onix', brand: 'Petzl', price: 19, image: 'images/carabiner2.jpeg', description:"Conçu pour confectionner une dégaine ou accrocher un accessoire sur son harnais."},
      { id: 2, title: 'Climb&Co Carabiners REF1', brand: 'Climb&Co', price: 5, image: 'images/carabiner3.jpg', description:"Mousqueton en inox à très grande résistance à la corrosion, pas de vis de verrouillage"},
      { id: 3, title: 'Climb&Co Carabiners REF2', brand: 'Climb&Co', price: 5, image: 'images/carabiner4.jpg', description:"Mousqueton en inox à très grande résistance à la corrosion, pas de vis de verrouillage"}
    ]
const helmetsList = [
      { id: 0, title: 'La sportiva rope', brand: 'Petzl', price: 79, image: 'images/helmet1.jpg', description: "Casque d'escalade conçu pour l'alpinisme et la spéologie, le casque possède une double commande réglable avec ventilation latéral."},
      { id: 1, title: 'Scarpa rope', brand: 'Petzl', price: 59, image: 'images/helmet4.jpg', description: "Casque d'escalade haut de gamme idéal pour l'alpinisme. Commande de sécurité réglable avec système autoblocant."},
      { id: 2, title: 'Climb&Co Helmet Red', brand: 'Climb&Co', price: 29, image: 'images/helmet2.jpg', description: "Notre casque d'escalade modèle adulte a été conçu spécialement pour vous permettre de grimper en toute sérénité et sécurité. Le casque respecte toutes les normes lié à la bonne pratique du sport."},
      { id: 3, title: 'Climb&Co Helmet Blue', brand: 'Climb&Co', price: 19, image: 'images/helmet3.jpg', description: "Notre casque d'escalade modèle enfant a été conçu spécialement pour vous permettre de grimper en toute sérénité et sécurité. Le casque respecte toutes les normes lié à la bonne pratique du sport."}
    ]

var userList = [
	  { id: 0, username: 'admin', password: 'admin', cart: []},
      { id: 1, username: 'user', password: 'user' , cart: []},
      { id: 2, username: 'random', password: '123',  cart: []} ,
      { id: 3, username: 'test', password: 'rate',  cart: []}
]

function getId(arr, prop) {
    var max = 0;
    for (var i=0 ; i<arr.length ; i++) {
        if (parseInt(arr[i][prop]) > parseInt(max)){
            max = arr[i][prop];
        }
    }
    return max+1;
}


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
  var found = false
  for (var i = 0; i < userList.length; i++) {
  	/*console.log('userList : ' + userList[i].username + '  : ' + userList[i].password)*/
  	if (userList[i].username === username && password === userList[i].password){
  		console.log(userList[i].cart.title)
  		var cart = []
  		for (var j = 0; j < userList[i].cart.length; j++) {
  			cart.push(userList[i].cart[j])
  			console.log(userList[i].cart[j])
  		}
  		res.status(200).json(cart)
  		found = true
  	}
  }
  	if (found === false) {
  		res.status(400).send('mauvais mdp')
  	}
})

router.post('/subscribe', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const passwordConfirm = req.body.passwordConfirm
  if (passwordConfirm === password) {
 	console.log('username :' + username)
  	console.log('password :' + password)
  	userList.push({
  		  'id': getId(userList, 'id'),
          'username': username,
          'password': password,
          'cart': []
        })
    res.status(200).send("ok")
  } else {
    res.status(400).send('mauvais mdp')
  }
})


router.put('/addItem', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const item = req.body.item
  var found = false
  var itemExist = false
  for (var i = 0; i < userList.length; i++) {
  	if (userList[i].username === username && password === userList[i].password){
  		for (var j = 0; j < userList[i].cart.length; j++) {
                  if(userList[i].cart[j].id === item.id){
                    itemExist=true
                    userList[i].cart[j].quantity ++
                  }
                }
                if(itemExist === false){
                  item.quantity=1
                  userList[i].cart.push(item)
               }
  		found = true
  		res.status(200).send('added')
  	}
  }
  	if (found === false) {
  		res.status(400).send('mauvais mdp')
  	}
})

router.put('/removeItem', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const item = req.body.item
  var found = false
  for (var i = 0; i < userList.length; i++) {
  	if (userList[i].username === username && password === userList[i].password){
  		for (var j = 0; j < userList[i].cart.length; j++) {
                  if(userList[i].cart[j].id === item.id){
                   userList[i].cart.splice(j, 1)
                  }
                }
  		found = true
  		res.status(200).send('removed')
  	}
  }
  	if (found === false) {
  		res.status(400).send('mauvais mdp')
  	}
})

router.delete('/deleteAccount', (req, res) => {
  const username = req.body.username
  const password = req.body.passwordDelete
  const passwordConfirm = req.body.passwordDeleteConfirm
  console.log(req.body)
  if (passwordConfirm === password) {
	for (var i = 0; i < userList.length; i++) {
  	if (userList[i].username === username && password === userList[i].password){
  		userList.splice(i, 1)
    res.status(200).send("ok")
  } else {
    res.status(400).send('mauvais mdp')
  }
}}})

 module.exports = router;