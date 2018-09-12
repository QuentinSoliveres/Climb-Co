
Vue.prototype.$http = axios


var app = new Vue({
  el: '#app',
  data: {
    currentPage: 'home',
    password: '',
    passwordConfirm: '',
    username: '',
    newUser: false,
    logged:false,
    message:'Log in',
    shopList:[],
    shoesList: [],
    ropeList: [],
    harnessesList: [],
    descendersList: [],
    carabinersList: [],
    helmetsList: [],
    cart: []
  },
  created () {
   
    this.$http.get('/shoesList')
      .then(list => {
        this.shoesList=list.data
      })
      .catch(err => {
        console.log('error', err)
      }),
    this.$http.get('/ropeList')
      .then(list => {
        this.ropeList=list.data
      })
      .catch(err => {
        console.log('error', err)
      })
    this.$http.get('/harnessesList')
      .then(list => {
        this.harnessesList=list.data
      })
      .catch(err => {
        console.log('error', err)
      }),
    this.$http.get('/descendersList')
      .then(list => {
        this.descendersList=list.data
      })
      .catch(err => {
        console.log('error', err)
      }),
    this.$http.get('/carabinersList')
      .then(list => {
        this.carabinersList=list.data
      })
      .catch(err => {
        console.log('error', err)
      }),
    this.$http.get('/helmetsList')
      .then(list => {
        this.helmetsList=list.data
      })
      .catch(err => {
        console.log('error', err)
      })
  },
  methods: {
  	setList:function (list){
  		this.shopList=list
  	},
    setPage:function (page){
      this.currentPage=page
      console.log(currentPage)
    },
     loggin:function() {
      this.$http.post('/connect', {
        password: this.password,
        username: this.username
      })
      .then(response =>{
          if (response.status === 200){
          this.logged=true,
          this.message=this.username,
          this.currentPage= 'home',
          this.cart.push(response.data)
          console.log(this.cart)
        }
      }) 
      .catch(error => {
        console.log(error.response)
      })
    },
    addToCart: function(item){
      if(this.logged === true){
       this.cart.push(item)
       console.log(this.cart)
      }
      else {
        alert('Please loggin to use this function')
        console.log('on passe')
      }   
    },
    sign_in: function(){
      if(this.password === this.passwordConfirm){
        this.$http.post('/subscribe', {
            password: this.password,
            passwordConfirm: this.passwordConfirm,
            username: this.username
      }).then(response =>{
          if (response.status === 200){
          this.logged=true,
          this.message=this.username,
          this.currentPage= 'home'
        }
      }) 
        .catch(error => {
          console.log(error.response)
        })
      }
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
						  	<button v-on:click="addToCart(value)" class="addTocartBtn" type="button">Add To Cart</button>
						  </div>
		  	     </div> 
		  	    </section>
		  	    </div>
		`,
    methods: {
      addToCart: function(value){
        this.$parent.addToCart(value);
         
      }
    }
  })

