<template>
  <v-app-bar app>
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
    </template>
    <v-spacer></v-spacer>
    <v-app-bar-title>Logo</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Projects</v-btn>
      <v-btn text>Recuitment</v-btn>
      <v-btn text>Team</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <input type="text" style />
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" light v-bind="attrs" v-on="on">中文</v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>中文</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
input {
  background-color: white;
}
</style>
