/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
    };
  },
  methods: {
    sumNums: function () {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
  },
};

Vue.createApp(App).mount("#app");
