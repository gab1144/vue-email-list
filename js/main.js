const {createApp } = Vue;

createApp({

  data(){
    return{
      title: "Email list",
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailList: [],
      isLoaded:null,
      limit: 10,
      loading: false
    }
  },
  methods:{
    getApi(){
     this.isLoaded = false;
     this.emailList = [];
     for( let i=0; i < this.limit ; i++){
        axios.get(this.apiUrl)
          .then( result => {
            this.loading = true;
            this.emailList.push(result.data.response);
            if(this.emailList.length === this.limit){
              this.isLoaded = true;
              this.loading = false;
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