<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/HeaderNav.vue';

export default {
  name: 'App',
  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss"></style>
