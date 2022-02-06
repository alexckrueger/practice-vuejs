/* global Vue */
/* global axios */

var App = {
  data: function () {
    return {
      message: "Tasks:",
      tasks: [
        {
          userId: 1,
          id: 1,
          title: "Mow the lawn",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "Feed the good boys",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "Shovel a grave",
          completed: false,
        },
      ],
      todos: [],
    };
  },
  created: function () {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response.data);
      this.todos = response.data;
    });
  },
  methods: {
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
    unloadTodos: function () {
      this.todos = [];
    },
    addTodos: function () {
      this.todos.push({ title: "HA", completed: false });
    },
  },
};

Vue.createApp(App).mount("#app");
