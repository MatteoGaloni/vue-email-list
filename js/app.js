const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Test Api",
      randomMail: "https://flynn.boolean.careers/exercises/api/random/mail",
      mails: [],
    };
  },
  methods: {},
  mounted() {
    for (let index = 0; index < 10; index++) {
      axios.get(this.randomMail).then((mails) => {
        this.mails.push(mails.data.response);
      });
    }
    console.log[("il valore dell'array è ", this.mails.length)];
  },
}).mount("#app");
