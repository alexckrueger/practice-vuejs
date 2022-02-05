/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      ouch: "Don't press me",
      model: "Type something here lol",
      colors: ["blue", "purple", "orange"],
      newColor: "",
      notInvis: false,
    };
  },
  methods: {
    changeMessage() {
      this.ouch = "I said don't press me >:(";
    },
    addColor() {
      this.colors.push(this.newColor);
      this.newColor = "";
    },
  },
};

Vue.createApp(App).mount("#app");
