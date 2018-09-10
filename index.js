
var app = new Vue({
  el: '#app',
  data: {
    currentPage: 'home',
    shoesList: [
      { id: 0, title: 'Katana', brand: 'La sportiva',  price: 500, image: '' },
      { id: 1, title: 'Scarpa' },
      { id: 2, title: 'Black diamond'} ,
      { id: 3, title: 'Evolv' }
    ],
    ropeList: [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ]
  }
})





  Vue.component('shop', {

    props: ['store'],
    template: ` <section id="shop"> 
				  <h1>Titre de ma page shop</h1>   
				  <p>Mon super texte</p>
				  	    magasin:
				  	     <li v-for="value in store">
				  	      nom:  {{ value.text }}
		  	     </li> </section>
		`
  })

