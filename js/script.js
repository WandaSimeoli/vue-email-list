const { createApp } = Vue

  createApp({
    data() {
      return {
        
      }
    },
    methods : {

    }
  }).mount('#app')

  console.log(axios);
  
  for (let index = 0; index < 10; index++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function(response) {
      const result = response.data;
      console.log(result.response);
    });

  }

 