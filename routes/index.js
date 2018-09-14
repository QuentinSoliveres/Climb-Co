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
  		res.status(200).send('added')
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