const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Test Api",
      randomMail: "https://flynn.boolean.careers/exercises/api/random/mail",
      mails: [],
      myEmail: "",
    };
  },
  methods: {
    addEmail() {
      axios.get(this.randomMail).then((mails) => {
        this.mails.push(mails.data.response);
      });
    },

    addPersonalEmail() {
      this.mails.push(this.myEmail);
    },

    deleteEmail(i) {
      this.mails.splice(i, 1);
      console.log(this.prova);
    },

    removeLastEmail() {
      this.mails.pop();
    },
  },

  mounted() {
    for (let index = 0; index < 5; index++) {
      axios.get(this.randomMail).then((mails) => {
        this.mails.push(mails.data.response);
      });
    }
    console.log[("il valore dell'array è ", this.mails.length)];
  },
}).mount("#app");
