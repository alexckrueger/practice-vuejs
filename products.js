/* global Vue, axios */

var App = {
  data: function () {
    return {
      products: [],
      name: "",
      description: "",
      price: "",
      image_url: "",
      productId: "",
      invisible: false,
      productIdToObliterate: "",
    };
  },
  created: function () {
    axios.get("http://localhost:3000/products").then((response) => (this.products = response.data));
  },
  methods: {
    createProduct: function () {
      var params = {
        name: this.name,
        description: this.description,
        price: this.price,
        image_url: this.image_url,
      };
      axios.post("http://localhost:3000/products", params).then((response) => {
        console.log(response.data);
        this.products.unshift(response.data);
      });
    },
    patchProduct: function () {
      var params = {
        id: this.productId,
        name: this.name || null,
        description: this.description || null,
        price: this.price || null,
        image_url: this.image_url || null,
      };
      axios.patch("http://localhost:3000/products/" + params.id, params);
    },
    deleteProduct: function () {
      console.log(this.productIdToObliterate);
      axios.delete("http://localhost:3000/products/" + this.productIdToObliterate);
      this.invisible = true;
    },
  },
};

Vue.createApp(App).mount("#app");
