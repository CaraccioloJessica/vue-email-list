/*
  Decrizione:
  generare 10 indirizzi email
  e stamparli in pagina all’interno di una lista.
*/
const { createApp } = Vue;

createApp({
  data () {
    return {
      emailList: [],
    }
  },

  methods: {
    generaMail(){
      // genera 10 mail tramite api e ciclo for
      for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((lista) => {
        // console.log(lista.data.response);
        // Inserisci le mail generate nell'array
        this.emailList.push(lista.data.response);
        })
      }
    }
  },

  mounted(){
    // mostra sul dom
    this.generaMail();
  }
}).mount('#app')