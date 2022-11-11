const {createApp } = Vue;

createApp({

  data(){
    return{
      title: "Email list",
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailList: [],
      isLoaded:false,
      limit: 10
    }
  },
  methods:{
    getApi(){
     this.isLoaded = false;
     this.emailList = [];
     for( let i=0; i < this.limit ; i++){
        axios.get(this.apiUrl)
          .then( result => {
            this.emailList.push(result.data.response);
            if(this.emailList.length === this.limit){
              this.isLoaded = true;
            }
          })
          .catch( error => {
            this.title = error.code
            console.log(error.code);
          })
      }
    }
  }
}).mount('#app');