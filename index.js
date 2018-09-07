Vue.component('climbing-item', {
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    shoesList: [
      { id: 0, text: 'La sportiva' },
      { id: 1, text: 'Scarpa' },
      { id: 2, text: 'Black diamond'} ,
      { id: 3, text: 'Evolv' }
    ],
    ropeList: [
      { id: 0, text: 'La sportiva rope' },
      { id: 1, text: 'Scarpa rope' },
      { id: 2, text: 'Black diamond rope'} ,
      { id: 3, text: 'Evolv rope' }
    ]
  }
})