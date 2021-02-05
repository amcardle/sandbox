<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { analytics } from "../firebase";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
