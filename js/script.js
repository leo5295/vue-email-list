const { createApp } = Vue;

createApp({
  data() {
    return {
      emailArray: [],
    };
  },
  methods: {
    generateEmails() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((result) => {
            this.email = result.data.response;
            this.emailArray.push(this.email);
          });
      }
    },
  },
}).mount("#app");