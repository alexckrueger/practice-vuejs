<script>
import axios from "axios";

export default {
  data: function () {
    return {
      meetings: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/meetings").then((response) => (this.meetings = response.data));
  },
  methods: {},
};
</script>

<template>
  <div class="meetings">
    <h1>Create a Meeting</h1>
    <div v-for="meeting in meetings" v-bind:key="meeting.id">
      <h3>{{ meeting.title }}</h3>
      <p>{{ meeting.location }}</p>
      <p>{{ meeting.date }}</p>
    </div>
  </div>
</template>

