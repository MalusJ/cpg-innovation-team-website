<template>
  <v-app-bar app color="blue lighten-2">
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
    </template>

    <v-spacer></v-spacer>

    <v-app-bar-title style="align-self: center">Logo</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text>Home</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Projects</v-btn>
      <v-btn text>Recuitment</v-btn>
      <v-btn text>Team</v-btn>
      <v-btn text>Contact</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <input type="text" placeholder="search" />
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" light v-bind="attrs" v-on="on">中文<v-icon>mdi-chevron-down</v-icon></v-btn>
      </template>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-content>中文</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>English</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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
  border-radius: 4px !important;
  background-color: rgb(232, 237, 255) !important;
}
</style>
