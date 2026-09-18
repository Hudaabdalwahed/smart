<template>
  <Navbar></Navbar>

  <router-view />
</template>

<script>
import Navbar from "./components/Nav-Bar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>
