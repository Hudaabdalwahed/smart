<template>
  <Navbar />

  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "./components/Nav-Bar.vue";
import Footer from "./components/Foote-Comp.vue";
</script>
