const { createApp } = Vue;

createApp({
  data () {
    return {

    }
  },

  methods: {

  },

  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((lista) => {
    // handle success
    console.log(lista.data.response);
  })
  }
}).mount('#app')