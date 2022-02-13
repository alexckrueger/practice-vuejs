// index.js
/* global Vue axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: [],
      newMovie: "",
      zoolanderExists: false,
    };
  },
  // created: function () {
  //   axios.get("http://localhost:3000/movies").then((response) => (this.movies = response.data));
  // },
  methods: {
    addMovie() {
      this.movies.push({ title: this.newMovie });
      this.newMovie = "";
      this.movies.forEach((movie) => {
        if (movie.title === "Zoolander") {
          this.zoolanderExists = true;
        }
      });
    },
    loadMovies() {
      this.movies = [];
      var response = axios.get("http://localhost:3000/movies").then((response) => (this.movies = response.data));
    },
  },
});
