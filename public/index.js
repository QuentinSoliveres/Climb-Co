
var app = new Vue({
  el: '#app',
  data: {
    currentPage: 'home',
    shopList:[],
    shoesList: [
      { id: 0, title: 'Katana', brand: 'La Sportiva',  price: 135, image: 'images/katana.jpg', description:"put some desc here!! just to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to filljust to fill"},
      { id: 1, title: 'Boostic', brand: 'Scarpa',  price: 115, image: 'images/Boostic.jpg',  description:"put some desc here!!"},
      { id: 2, title: 'Bandit', brand: 'Evolv', price: 94, image: 'images/Bandit.jpg', description:"put some desc here!!" } ,
      { id: 3, title: 'Rock Pillars', brand: 'Diamond',  price: 120, image: 'images/rock-pillars.jpg', description:"put some desc here!!" }
    ],
    ropeList: [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ],
    harnessesList: [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ],
    descendersList: [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ],
    carabinersList: [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ],
    helmetsList: [
      { id: 0, title: 'La sportiva rope' },
      { id: 1, title: 'Scarpa rope' },
      { id: 2, title: 'Black diamond rope'} ,
      { id: 3, title: 'Evolv rope' }
    ]
  },
  methods: {
  	setList:function (list){
  		this.shopList=list
  	}
  }
})





  Vue.component('shop', {

    props: ['store'],
    template: ` <div class="storeContainer">
    			<nav>
    				<ul>
    					<li><a v-on:click.native="setList(shoesList)" >Shoes</a> </li>
	    				<li><a v-on:click.native="setList(helmetsList)">Helmets</a></li>
	    				<li><a v-on:click="setList(harnessesList)">Harnesses</a></li>
	    				<li><a v-on:click="setList(descendersList)">Descenders</a></li>
	    				<li><a v-on:click="setList(ropeList)">Ropes</a></li>
	    				<li><a v-on:click="setList(carabinersList)">Carabiners</a></li>
    				</ul>
    			</nav>

    			<section id="shop"> 
				  <h1>Titre de ma page shop</h1>   
				  	    <h2>magasin:</h2>
				  	     <div class="itemContainer" v-for="value in store">
				  	      <img v-bind:src="value.image" width="300" height="300" >
				  	      <div class="itemInfoColumn1">
					  	      <h3> {{ value.title }} </h3> 
					  	      <h4> {{ value.brand }} </h4> 
					  	      <p class="price"> price: {{ value.price }} </p>
				  	      </div> 
				  	      <div class="itemInfoColumn2">
				  	      	<p class="productDesc" > {{ value.description }} </p>
						  	<button class="addTocartBtn" type="button">Add To Cart</button>
						  </div>
		  	     </div> 
		  	    </section>
		  	    </div>
		`
  })

