<script>
// import axios from "axios";

import axios from "axios";

export default {
  data: function () {
    return {
      newMeeting: {},
      errors: [],
      createdMessage: "",
    };
  },
  created: function () {},
  methods: {
    createMeeting: function (meeting) {
      this.errors = [];
      this.createdMessage = "";
      axios
        .post("http://localhost:3000/meetings", meeting)
        .then((response) => {
          console.log("Success", response.data);
          this.createdMessage = "Successfully created!";
        })
        .catch((errors) => (this.errors = errors.response.data.errors));
    },
  },
};
</script>

<template>
  <div class="create">
    <h1>Upcoming Meetings</h1>
    <div>
      <h3>
        Title:
        <input type="text" v-model="newMeeting.title" />
      </h3>
      <p>
        Location:
        <input type="text" v-model="newMeeting.location" />
      </p>
      <p>
        Date & Time:
        <input type="text" v-model="newMeeting.date" />
      </p>
      <p>Date & Time must be in this format: YYYY-MM-DDTHH:MM:00.000Z</p>
      <button v-on:click="createMeeting(newMeeting)">Submit Meeting</button>
      <div v-if="errors">
        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
      </div>
      <p v-if="createdMessage">{{ createdMessage }}</p>
    </div>
  </div>
</template>
