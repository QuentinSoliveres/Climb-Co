new Vue({
  el: '#v-for-object',
  data: {
    items: [
    {nom: 'sprotiva', prix: 200},
    {nom: 'diamond', prix: 50},
    {nom: 'sflex', prix: 1000},
    {nom: 'truc', prix: 500}
    ],
    panier: []
	},
  methods:{
    additem(value) {
	    const newObject = {
	    	nom: value.nom, prix: value.prix
	    }
	    console.log(this.nom)
	    this.panier.push(newObject)
	}
  }
})