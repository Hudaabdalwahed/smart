<template>
  <Navbar></Navbar>

  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Nav-Bar.vue";
import Footer from "./components/Foote-Comp.vue";
export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>
