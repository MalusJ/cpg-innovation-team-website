<template>
  <v-row>
    <v-app-bar app color="blue darken-1">
      <v-spacer></v-spacer>

      <v-col cols="1">
        <v-app-bar-title style="align-self: center">Logo</v-app-bar-title>
      </v-col>

      <v-toolbar-items>
        <v-btn text><router-link to="/">Home</router-link></v-btn>
        <v-btn text><router-link to="/about">About</router-link></v-btn>
        <v-btn text><router-link to="/projects">Projects</router-link></v-btn>
        <v-btn text><router-link to="/recuitment">Recuitment</router-link></v-btn>
        <v-btn text><router-link to="/team">Team</router-link></v-btn>
        <v-btn text><router-link to="/contact">Contact</router-link></v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <input id="header-search" type="text" placeholder="search" />
      <v-btn icon class="mr-1">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small color="blue lighten-1" v-bind="attrs" v-on="on">中文<v-icon>mdi-chevron-down</v-icon></v-btn>
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
  </v-row>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.v-toolbar__content .v-btn .v-btn__content a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87) !important;
}
#header-search {
  border-radius: 4px !important;
  background-color: rgb(232, 237, 255) !important;
  height: 60%;
}
.v-app-bar {
  width: 100%;
}
</style>
