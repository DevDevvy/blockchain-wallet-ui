<script>
  import background from '@/assets/background.jpg';
  export default {
  data() {
    return {
      background
    };
  },
};
</script>

<template>
  <v-parallax
    :src="background"
  >
    <div class="about">
      <h1>
        Vuetify
      </h1>
      <h4 class="subheading">
        Build your application today!
      </h4>
    </div>
  </v-parallax>
</template>

<style>

</style>
